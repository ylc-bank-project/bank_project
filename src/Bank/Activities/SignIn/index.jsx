import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

const SignIn = () => {
  const [step, setStep] = useState(1);
  return (
    <>
      <div data-tip="hello world">
        This is how to sign in. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Laboriosam ducimus vel architecto unde suscipit
        sapiente optio. Quidem omnis impedit exercitationem voluptates, officia
        sapiente obcaecati placeat doloremque, nisi aperiam est repellat? Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Expedita eos nihil
        quasi ut dolore consectetur consequuntur sunt, at omnis obcaecati eius
        assumenda similique amet fugit accusantium. Asperiores ad placeat
        repellat? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Veniam, fugiat reiciendis excepturi illum nihil a ipsa quidem placeat
        quaerat architecto inventore aliquid necessitatibus quibusdam est rerum
        doloremque fugit officiis! Velit. Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. At commodi obcaecati cum porro expedita
        fugit recusandae facere maxime, illum blanditiis nulla autem deleniti
        nisi! Aperiam pariatur officia sint repudiandae? Nam.
      </div>
      <ReactTooltip effect="solid" event="click" />
    </>
  );
};

export default SignIn;
