import { BsTwitter, BsLink45Deg } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

export default function States(props) {
  const { name, login, img, bio, page, twitter, blog, email } = props;
  return (
    <>
      {img && (
        <div className="relative">
          <div className="flex flex-col md:flex-row items-center justify-between text-center mb-5">
            <img src={img} alt="user" className="rounded-full w-[250px]" />
            <div className="right flex flex-col min-w-[250px] max-w-[250px]">
              <h3 className="text-2xl border-dashed border-b-2 border-red-500">
                {name || login}
              </h3>
              <p className="border-dashed border-b-2 border-red-500">
                {bio || "This user has no bio"}
              </p>
              <div className="contacts w-full flex justify-evenly">
                {twitter && (
                  <a href={`https://twitter.com/${twitter}`} target="_blank">
                    <BsTwitter className="text-2xl hover:cursor-pointer" />
                  </a>
                )}
                {email && (
                  <a href={`mailto:${email}`} target="_blank">
                    <IoMdMail className="text-2xl hover:cursor-pointer" />
                  </a>
                )}
                {blog && (
                  <a href={`https://${blog}`} target="_blank">
                    <BsLink45Deg className="text-2xl hover:cursor-pointer" />
                  </a>
                )}
              </div>
            </div>
          </div>
          <a
            href={page}
            target="_blank"
            className="px-5 py-2.5 text-white bg-indigo-600 duration-150 hover:bg-indigo-700 active:shadow-lg absolute left-[50%] translate-x-[-50%]"
          >
            Visit Profile
          </a>
        </div>
      )}
    </>
  );
}
