import * as Style from './textButton.style';

function TextButton({ text, imageSrc }) {
    return <Style.Root>
        <Style.Image style={{background: `url(${imageSrc})`, backgroundSize: "contain"}} />
        <h1>{text}</h1>
    </Style.Root>
}

export default TextButton;
