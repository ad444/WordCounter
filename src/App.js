import './App.css';
import { useState } from "react";
import Brightness4RoundedIcon from '@material-ui/icons/Brightness4Rounded';
import x from "./darkTheme.json";

function App() {
  const [textValue, settextValue] = useState("");
  const [countedCharacters, setcountedCharacters] = useState("0");
  const [countedWords, setcountedWords] = useState("0");
  const [countedSpaces, setcountedSpaces] = useState("0");

  //Application theme
  const [bodyTheme, setbodyTheme] = useState(x.bodyWhiteTheme);
  const [titleContainerTheme, settitleContainerTheme] = useState(x.titleContainerWhiteTheme);
  const [textContainerTheme, settextContainerTheme] = useState(x.textContainerWhiteTheme);
  const [counterContainerTheme, setcounterContainerTheme] = useState(x.counterContainerWhiteTheme);
  const [countingPartTheme, setcountingPartTheme] = useState(x.countingPartTheme);

  const call2 = (e) => {
    if (e.target.value === "") {
      setcountedCharacters("0");
      setcountedWords("0");
      setcountedSpaces("0");
    } else {
      if (e.target.value.includes("\n")) {
        let temp = e.target.value.replace(/\n/g, "");
        setcountedCharacters(temp.length);
      } else {
        setcountedCharacters(e.target.value.length);
      }
      if (e.target.value.includes("(")) {
        let temp = e.target.value.replace(/\(/g, "");
        let wordCount = temp.split(/\s\w+/);
        setcountedWords(wordCount.length);
      } else if (e.target.value.includes("{")) {
        let temp = e.target.value.replace(/\{/g, "");
        let wordCount = temp.split(/\s\w+/);
        setcountedWords(wordCount.length);
      } else if (e.target.value.includes("[")) {
        let temp = e.target.value.replace(/\[/g, "");
        let wordCount = temp.split(/\s\w+/);
        setcountedWords(wordCount.length);
      }
      else {
        let wordCount = e.target.value.split(/\s\w+/);
        setcountedWords(wordCount.length);
      }
      let spaceCount = e.target.value.split(" ");
      setcountedSpaces(spaceCount.length - 1);
    }
  }

  const darkTheme = () => {
    if (x.themeCheck === "true") {
      setbodyTheme(x.bodyDarkTheme);
      settitleContainerTheme(x.titleContainerDarkTheme);
      settextContainerTheme(x.textContainerDarkTheme);
      setcounterContainerTheme(x.counterContainerDarkTheme);
      setcountingPartTheme(x.countingPartDarkTheme)
      x.themeCheck = "false";
    } else {
      setbodyTheme(x.bodyWhiteTheme);
      settitleContainerTheme(x.titleContainerWhiteTheme);
      settextContainerTheme(x.textContainerWhiteTheme);
      setcounterContainerTheme(x.counterContainerWhiteTheme);
      setcountingPartTheme(x.countingPartWhiteTheme);
      x.themeCheck = "true";
    }
  }

  return (
    <div id="mainDivision" style={bodyTheme}>
      <div className="container">
        <div id="titleContainer" style={titleContainerTheme} className="row my-lg-2">
          <div className="col-8 col-lg-6">
            <p id="title">Character Counter</p>
          </div>
          <div className="col-4 col-lg-6">
            < Brightness4RoundedIcon onClick={darkTheme} style={{ fontSize: 26, position: "relative", top: "50%", transform: "translateY(-50%)", float: "right", cursor: "pointer" }} />
          </div>
        </div>
        <div id="textArea" className="row my-4 my-lg-5">
          <div id="textContainer" className="col-10 mx-auto" style={textContainerTheme}>
            <textarea id="textAreaValue" style={textContainerTheme} name="text" maxLength="1000" placeholder="Start writing here..." value={textValue} onKeyUp={call2} onChange={(e) => {
              settextValue(e.target.value);
            }}></textarea>
            {/* <div id="text" onClick={call} onKeyUp={call2} contentEditable="true" suppressContentEditableWarning={true}>Start writing here...</div>  */}
          </div>
        </div>
        <div id="characterCountRow" className="row my-lg-5">
          <div className="col-12 col-sm-10 mx-auto ">
            <div className="row">
              <div className="col-6 col-sm-4 my-1 mx-auto">
                <div className="counterContainer" style={counterContainerTheme}>Characters<span className="countingPart" id="countedCharacters" style={countingPartTheme}>{countedCharacters}</span></div>
              </div>
              <div className="col-6 col-sm-4 my-1 mx-auto">
                <div className="counterContainer" style={counterContainerTheme}>Words<span className="countingPart" id="countedWords" style={countingPartTheme}>{countedWords}</span></div>
              </div>
              <div className="col-6 col-sm-4 my-1 mx-auto">
                <div className="counterContainer" style={counterContainerTheme}>Spaces<span className="countingPart" id="countedSpaces" style={countingPartTheme}>{countedSpaces}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
