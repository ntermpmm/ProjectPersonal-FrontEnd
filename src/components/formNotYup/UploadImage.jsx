import { useRef } from "react";

function UploadImage({ value, onChange, onDelete }) {
    const inputEl = useRef();

    return (
        <>
            <div
                className=""
                role="button"
                onClick={(e) => {
                    e.stopPropagation();
                    inputEl.current.click();
                }}
            >
                {value ? (
                    <>
                        <button
                            className="bg-text_green px-8 shadow-lg text-bg_admin shadow-bg_subBg  py-2 rounded-lg"
                            style={{
                                top: 6,
                                right: 6,
                                backgroundColor: "white",
                            }}
                            onClick={(e) => {
                                e.stopPropagation();
                                inputEl.current.value = "";
                                onDelete();
                            }}
                            type="button"
                        ></button>
                        <img
                            src={URL.createObjectURL(value)}
                            alt="post"
                            className=" "
                        />
                    </>
                ) : (
                    <button className="mt-8 bg-text_green px-8 shadow-lg text-bg_admin shadow-bg_subBg  py-2 rounded-lg">
                        Upload Image Title
                    </button>
                )}
            </div>
            <input
                type="file"
                className="invisible"
                ref={inputEl}
                onChange={onChange}
            />
        </>
    );
}

export default UploadImage;
