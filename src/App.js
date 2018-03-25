import React, { Component } from "react";
import logo from "./logo.svg";

//import ContactForm from "./components/Drop";
//import Gallery from "./components/Gallery";
import New from "./components/New";

// const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: "dskiba" });
// const SampleImg = () => <img src={cloudinaryCore.url("sample")} />;

class App extends Component {
  render() {
    return (
      // <div>
      //   <ContactForm />
      //   <Gallery />
      // </div>

      // <CloudinaryContext cloudName="dskiba">
      //   <Image publicId="sample" format="jpg">
      //     <Transformation
      //       crop="fill"
      //       gravity="faces"
      //       width="300"
      //       height="200"
      //     />
      //   </Image>
      // </CloudinaryContext>
      <div>
        <New />
      </div>
    );
  }
}

export default App;
