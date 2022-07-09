import defaultPic from "../../assets/Image/profileImg.png";

function UserIcon({ src, size, border }) {
    console.log(size);
    return (
        <img
            className="rounded-full object-cover line important-size"
            src={src || defaultPic}
            width={size}
            height={size}
            alt="user"
        />
    );
}

export default UserIcon;
