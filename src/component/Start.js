import Button from "./Button";

const Start = (props) => {
    return <div>
        <h1 id="title">Start</h1>
        <Button text="pre-click"
                onClick={() => {
                    document.getElementById("title").innerText = "post-click"
                }}
        />
    </div>
};

export default Start