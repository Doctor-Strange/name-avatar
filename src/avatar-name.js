import { letter_control } from "./helpers/letter_control";
import { invert_hex } from "./helpers/invert_hex";
import { random_hex_color } from "./helpers/random_hex_color";
import "./avatar-name.css";

const NameAvatar = ({
  name,
  css_display,
  css_with,
  css_background_color,
  random_background,
  css_radius,
  css_text_color,
}) => {
  if (!isNaN(name)) {
    name = "??";
  }

  let background_color = css_background_color
    ? css_background_color
    : random_background
    ? `#${random_hex_color()}`
    : "initial";

  let text_color = css_text_color
    ? css_text_color
    : css_background_color || random_background
    ? `#${invert_hex(
        css_background_color ? css_background_color : random_hex_color()
      )}`
    : "initial";

  let font_size = `${css_with / 2.5}px`;

  return (
    <div
      className='name_avatar__container'
      style={{
        display: css_display,
        width: `${css_with}px`,
        height: `${css_with}px`,
        backgroundColor: background_color,
        color: text_color,
        fontSize: font_size,
        borderRadius: `${css_radius}%`,
      }}
    >
      <span>{letter_control(name)}</span>
    </div>
  );
};

export default NameAvatar;
