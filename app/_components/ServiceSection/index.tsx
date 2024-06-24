import React from "react";
import styles from "./serviceSection.module.css";
import serviceImg from "@/public/images/service_img.jpg";
import Image from "next/image";
import Heading from "../Heading";

const ServiceSection = () => {
  return (
    <div className="container">
      <div className={styles.flex}>
        <div className="">
          <Image src={serviceImg} alt="service" />
        </div>
        <div className={styles.textArea}>
          <Heading title="Usce arcu turpis, vehicula in elementum tincidunt, faucibus at ligula." />
          <p>
            Proin pharetra lectus non felis vulputate, nec commodo quam mattis.
            Donec fermentum diam eget sem placerat vestibulum. Donec consectetur
            ut leo quis feugiat.{" "}
          </p>
          <p>
            Phasellus quis dignissim lectus. Maecenas dolor ex, pulvinar in
            vestibulum eu, condimentum sit amet lacus. Fusce ex augue, facilisis
            ut ligula vitae, fringilla dictum sem. Donec tempus blandit nulla
            vel auctor. Donec non vestibulum tellus, sit amet condimentum felis.
            Maecenas scelerisque elit a lectus consequat tincidunt.
          </p>

          <button>Read about operations</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
