import { NextResponse } from 'next/server';
import { dbClient , dbPartner } from '../../utility/db';
import bcrypt from 'bcryptjs';

export async function POST(req) {
    const reqData = await req.json()
    if(!reqData.firstName || reqData.firstName.trim() == '') return NextResponse.json({error: 'First Name is not valid'}, { status: 422 });
    if(!reqData.lastName || reqData.lastName.trim() == '') return NextResponse.json({error: 'Last Name is not valid'}, { status: 422 });
    if(!reqData.email || reqData.email.trim() == '') return NextResponse.json({error: 'Email is not valid'}, { status: 422 });
    if(!reqData.phone || reqData.phone.trim() == '') return NextResponse.json({error: 'Phone is not valid'}, { status: 422 });
    if(!reqData.password || reqData.password.trim() == '') return NextResponse.json({error: 'Password is not valid'}, { status: 422 });
    try {
        const email = reqData.email;
        const user = await dbPartner.findOne({ email });
        if (user) {
            return NextResponse.json({error: 'Email already exist'}, { status: 200 });
        }
        const hashedPassword = await bcrypt.hash(reqData.password, 10);
        const data = {
            firstName: reqData.firstName,
            lastName: reqData.lastName,
            email: reqData.email,
            phone: reqData.phone,
            software: true,
            password: hashedPassword,
            product: {},
            createdAt: new Date(),
        };
        await dbClient.connect();
        const result = await dbPartner.insertOne(data);
        return NextResponse.json({sucess: result}, {status: 200});
    } catch (err) {
        return NextResponse.json({error: `Unable to connect to db => ${err}`});
    } finally {
        dbClient.close();
    }
}