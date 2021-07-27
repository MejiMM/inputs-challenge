import "../styles/Inputs.css";
import Input from "./Input";

export default function Inputs() {

    return(
        <main className="main">
            <h2>
                Inputs
            </h2>
            <section className="grid--section">
                <Input typeInput="Input" option="input--normal" />
                <Input typeInput="&:hover, &:focus" />
                <Input typeInput="error" option="error--normal"/>
                <Input typeInput="error" textOption="&:hover, &:focus"></Input>
                <Input typeInput="disabled"></Input>
                <br></br>
                <Input typeInput="Input" helperText="Example Helper Text" textOption="With Helper Text"></Input>
                <Input typeInput="error" helperText="Example Helper Text Error" textOption="With Helper Text"></Input>
                <Input typeInput="Input" textOption="startIcon" startIcon="true"></Input>
                <Input typeInput="Input" textOption="endIcon" endIcon="true"></Input>
                <Input typeInput="Input" textOption="value='text'" value="text"></Input>
                <br></br>
                <Input typeInput="Input" textOption="size='sm'" size="sm"></Input>
                <Input typeInput="Input" textOption="size='xl'" size="xl"></Input>
                <Input typeInput="Input" textOption="size='fullWidth'" size="fullWidth"></Input>
                <br></br>
                <Input typeInput="multiline" numRow={5}></Input>
                <br></br>
               
            </section>
            <h3 className="author">Author: José M Mojica -<a href="https://devchallenges.io/">devchallenges.io</a></h3>
        </main>
    );
};