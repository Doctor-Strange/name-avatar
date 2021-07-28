import { useState } from "react";
import "./App.css";
import NameAvatar from "./avatar-name";

function App() {
  const [text, set_text] = useState("");
  const [random, set_random] = useState(true);
  const [background, set_background] = useState("#000000");
  const [text_color, set_text_color] = useState("#ffffff");
  const [size, set_size] = useState(64);
  const [radius, set_radius] = useState(25);
  return (
    <>
      متن
      <input value={text} onChange={(e) => set_text(e.target.value)} />
      <br />
      پس زمینه رندوم
      <input
        type='checkbox'
        checked={random}
        onChange={(e) => {
          set_random(e.target.checked);
        }}
      />
      <br />
      {!random && (
        <>
          پس زمینه انتخابی
          <input
            type='color'
            onChange={(e) => {
              set_background(e.target.value);
            }}
            value={background}
          />
          <br />
          رنگ متن
          <input
            type='color'
            onChange={(e) => {
              set_text_color(e.target.value);
            }}
            value={text_color}
          />
        </>
      )}
      <br />
      سایز
      <input
        type='range'
        value={size}
        onChange={(e) => set_size(e.target.value)}
        min='32'
        max='300'
      />
      <br />
      شعاع
      <input
        type='range'
        value={radius}
        onChange={(e) => set_radius(e.target.value)}
        min='0'
        max='50'
      />
      <NameAvatar
        name={text}
        css_display={"block"}
        css_with={size}
        css_radius={radius}
        random_background={random}
        css_text_color={random ? false : text_color}
        css_background_color={random ? false : background}
      />
    </>
  );
}

export default App;
