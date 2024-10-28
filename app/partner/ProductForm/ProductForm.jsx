const ProductForm = () => {
  return (
    <ul className="steps steps-vertical w-full">
      <li className="step step-primary">
        <div className="collapse collapse-arrow bg-white shadow">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-2xl font-bold text-start border-b">
            Company Information
          </div>
          <div className="collapse-content">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-xl">
                  <strong>1. Legal Company Name</strong>{" "}
                  <span className="text-red-500 font-bold text-2xl">*</span>
                </span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </label>

            <p className="text-xl label-text text-start pt-5">
              <strong>2. Contact Details</strong>{" "}
              <span className="text-red-500 font-bold text-2xl">*</span>
            </p>
            <div className="form-control">
              <label className="label cursor-pointer justify-start gap-3">
                <input type="checkbox" defaultChecked className="checkbox" />
                <span className="label-text text-xl">I'm Contact Person</span>
              </label>
            </div>
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text text-base">
                      <strong>Name</strong>{" "}
                      <span className="text-red-500 font-bold text-2xl">*</span>
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full"
                  />
                </label>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text text-base">
                      <strong>Phone</strong>{" "}
                      <span className="text-red-500 font-bold text-2xl">*</span>
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="w-1/2">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text text-base">
                      <strong>Email </strong>{" "}
                      <span className="text-red-500 font-bold text-2xl">*</span>
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full"
                  />
                </label>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text text-base">
                      <strong>Designation</strong>{" "}
                      <span className="text-red-500 font-bold text-2xl">*</span>
                    </span>
                  </div>
                  <select className="select select-bordered w-full">
                    <option disabled selected value="">
                      Select
                    </option>
                    <option value="1">President</option>
                    <option value="2">Vice President</option>
                    <option value="3">Chief Information Officer</option>
                    <option value="4">Chief Marketing Officer</option>
                    <option value="5">Assistant Vice President</option>
                    <option value="6">Chief Technical Officer</option>
                    <option value="7">Chief Executive officer</option>
                    <option value="8">Chief Operation Officer</option>
                    <option value="9">Managing Director</option>
                    <option value="10">Alliances &amp; Partnerships</option>
                    <option value="11">Sales Head</option>
                    <option value="12">Sales Executive</option>
                    <option value="13">Marketing Head</option>
                    <option value="14">Marketing Executive</option>
                    <option value="15">Channel Manager</option>
                    <option value="16">Channel Executive</option>
                    <option value="17">Business Development Executive</option>
                    <option value="19">Director</option>
                    <option value="20">General Manager</option>
                    <option value="21">Partner</option>
                    <option value="22">Business Development Manager</option>
                    <option value="23">Regional Sales Manager</option>
                    <option value="24" selected="">
                      Proprietor
                    </option>
                    <option value="25">Project Manager</option>
                    <option value="26">Founder</option>
                    <option value="27">Software Engineer</option>
                    <option value="28">Product Manager</option>
                    <option value="29">Consultant</option>
                    <option value="30">Analyst</option>
                    <option value="31">Administrator</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="flex justify-end pt-5 gap-5">
              <button className="btn">Skip</button>
              <button className="btn btn-neutral">SAVE & NEXT</button>
            </div>
          </div>
        </div>
      </li>
      <li className="step step-primary">
        <div className="collapse collapse-arrow bg-white shadow">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-2xl font-bold text-start border-b">
            Brand Details
          </div>
          <div className="collapse-content">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-xl">
                  <strong>1. Brand Name</strong>{" "}
                  <span className="text-red-500 font-bold text-2xl">*</span>
                </span>
              </div>
              <label className="label cursor-pointer justify-start gap-3">
                <input type="checkbox" defaultChecked className="checkbox" />
                <span className="label-text text-xl">Same as company name</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </label>
            <div className="flex justify-end pt-5 gap-5">
              <button className="btn">PREVIOUS</button>
              <button className="btn">Skip</button>
              <button className="btn btn-neutral">SAVE & NEXT</button>
            </div>
          </div>
        </div>
      </li>
      <li className="step">
        <div className="collapse collapse-arrow bg-white shadow">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Product Details
          </div>
          <div className="collapse-content">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-xl">
                  <strong>1. Product Name</strong>{" "}
                  <span className="text-red-500 font-bold text-2xl">*</span>
                </span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-xl">
                  <strong>2. Primary Category</strong>{" "}
                  <span className="text-red-500 font-bold text-2xl">*</span>
                </span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </label>
            <p className="text-xl label-text text-start pt-5">
              <strong>3. Logo & Images</strong>{" "}
              <span className="text-red-500 font-bold text-2xl">*</span>
            </p>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 pt-5">
              <div>
                <div className="skeleton h-52 w-full"></div>
              </div>
              <div>
                <div className="skeleton h-52 w-full"></div>
              </div>
              <div>
                <div className="skeleton h-52 w-full"></div>
              </div>
              <div>
                <div className="skeleton h-52 w-full"></div>
              </div>
            </div>
            <p className="text-xl label-text text-start pt-5">
              <strong>4. Specification </strong>{" "}
              <span className="text-red-500 font-bold text-2xl">*</span>
            </p>

            <p className="text-base label-text text-start pt-5">
              Deployment{" "}
              <span className="text-red-500 font-bold text-xl">*</span>
            </p>
            <div className="flex gap-3">
              <label className="label cursor-pointer justify-start gap-3">
                <input type="checkbox" className="checkbox" />
                <span className="label-text text-xl">Cloud</span>
              </label>
              <label className="label cursor-pointer justify-start gap-3">
                <input type="checkbox" className="checkbox" />
                <span className="label-text text-xl">Premise</span>
              </label>
            </div>
            <p className="text-base label-text text-start pt-5">
              Operating System{" "}
              <span className="text-red-500 font-bold text-xl">*</span>
            </p>
            <div className="flex gap-3">
              <label className="label cursor-pointer justify-start gap-3">
                <input type="checkbox" className="checkbox" />
                <span className="label-text text-xl">Ubuntu</span>
              </label>
              <label className="label cursor-pointer justify-start gap-3">
                <input type="checkbox" className="checkbox" />
                <span className="label-text text-xl">Windows</span>
              </label>
              <label className="label cursor-pointer justify-start gap-3">
                <input type="checkbox" className="checkbox" />
                <span className="label-text text-xl">iOS</span>
              </label>
              <label className="label cursor-pointer justify-start gap-3">
                <input type="checkbox" className="checkbox" />
                <span className="label-text text-xl">Android</span>
              </label>
              <label className="label cursor-pointer justify-start gap-3">
                <input type="checkbox" className="checkbox" />
                <span className="label-text text-xl">MacOS</span>
              </label>
              <label className="label cursor-pointer justify-start gap-3">
                <input type="checkbox" className="checkbox" />
                <span className="label-text text-xl">Windows(Phone)</span>
              </label>
              <label className="label cursor-pointer justify-start gap-3">
                <input type="checkbox" className="checkbox" />
                <span className="label-text text-xl">Linux</span>
              </label>
            </div>

            <p className="text-base label-text text-start pt-5">
              Device <span className="text-red-500 font-bold text-xl">*</span>
            </p>
            <div className="flex gap-3">
              <label className="label cursor-pointer justify-start gap-3">
                <input type="checkbox" className="checkbox" />
                <span className="label-text text-xl">Desktop</span>
              </label>
              <label className="label cursor-pointer justify-start gap-3">
                <input type="checkbox" className="checkbox" />
                <span className="label-text text-xl">Mobile</span>
              </label>
              <label className="label cursor-pointer justify-start gap-3">
                <input type="checkbox" className="checkbox" />
                <span className="label-text text-xl">Tablet</span>
              </label>
              <label className="label cursor-pointer justify-start gap-3">
                <input type="checkbox" className="checkbox" />
                <span className="label-text text-xl">iPad</span>
              </label>
            </div>
            <p className="text-base label-text text-start pt-5">
              Business Type{" "}
              <span className="text-red-500 font-bold text-xl">*</span>
            </p>
            <div className="flex gap-3">
              <label className="label cursor-pointer justify-start gap-3">
                <input type="checkbox" className="checkbox" />
                <span className="label-text text-xl">Small Business</span>
              </label>
              <label className="label cursor-pointer justify-start gap-3">
                <input type="checkbox" className="checkbox" />
                <span className="label-text text-xl">Startups</span>
              </label>
              <label className="label cursor-pointer justify-start gap-3">
                <input type="checkbox" className="checkbox" />
                <span className="label-text text-xl">Medium Business</span>
              </label>
              <label className="label cursor-pointer justify-start gap-3">
                <input type="checkbox" className="checkbox" />
                <span className="label-text text-xl">Enterprises</span>
              </label>
              <label className="label cursor-pointer justify-start gap-3">
                <input type="checkbox" className="checkbox" />
                <span className="label-text text-xl">SMBs</span>
              </label>
              <label className="label cursor-pointer justify-start gap-3">
                <input type="checkbox" className="checkbox" />
                <span className="label-text text-xl">SMEs</span>
              </label>
              <label className="label cursor-pointer justify-start gap-3">
                <input type="checkbox" className="checkbox" />
                <span className="label-text text-xl">MSMBs</span>
              </label>
              <label className="label cursor-pointer justify-start gap-3">
                <input type="checkbox" className="checkbox" />
                <span className="label-text text-xl">MSMEs</span>
              </label>
            </div>

            <div className="flex justify-end pt-5 gap-5">
              <button className="btn">PREVIOUS</button>
              <button className="btn">PREVIEW</button>
              <button className="btn btn-neutral">SAVE & NEXT</button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default ProductForm;
