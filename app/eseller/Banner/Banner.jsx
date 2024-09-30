import Styles from "./Banner.module.css";

const banner = () => {
  return (
    <section>
      <div className={`bg-fixed bg-cover ${Styles.banner}`}>
        <div className={`grid place-items-center h-svh ${Styles.bgDark}`}>
        <div className="text-center">
          <h1 className=" text-6xl text-center text-white leading-relaxed">
            Businesses are looking for the right software on <br/> techcloud.com
            <br /> <strong className="text-7xl">are you listed yet?</strong>
          </h1>
          <button className="btn bg-zinc-900 text-white text-lg rounded-3xl px-14 shadow hover:bg-indigo-700 ls-lg mt-10 mx-auto">
            List for Free
          </button>
        </div>
        </div>
      </div>
    </section>
  );
};

export default banner;
