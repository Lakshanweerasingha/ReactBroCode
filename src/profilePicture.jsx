function ProfilePicture () {

    const ImageUrl = './src/assets/react.svg';

    const click = (e) => {
        e.target.style.height = "100px";
    }
    return (
        <img onClick={(e) => click(e)} src={ImageUrl}/>
    )
}
export default ProfilePicture