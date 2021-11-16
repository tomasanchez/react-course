import React from "react";
import { ObjectPage } from "@ui5/webcomponents-react/dist/ObjectPage";
// import { IllustratedMessage } from "@ui5/webcomponents-react/dist/IllustratedMessage";
// import { IllustrationMessageType } from "@ui5/webcomponents-react/dist/IllustrationMessageType";
// import { Avatar } from "@ui5/webcomponents-react/dist/Avatar";
import ObjectTitle from "../../components/ObjectPage/ObjectTitle";
import ObjectHeader from "../../components/ObjectPage/ObjectHeader";
import "@ui5/webcomponents-fiori/dist/illustrations/NoData.js";
import "@ui5/webcomponents-icons/dist/product";
import { ObjectPageSection } from "@ui5/webcomponents-react";
import ReviewsSection from "./ReviewsSection";

function Product() {
  return (
    <ObjectPage
      headerTitle={<ObjectTitle title="Notebook Professional 15" />}
      headerContent={<ObjectHeader />}
      style={{ height: "100vh" }}
      // image={<Avatar size="XL" icon="product" colorScheme="Accent5" />}
      image="https://www.masala.com/cloud/2021/07/27/8F6goM2X-Laptop.jpeg.jpeg"
      imageShapeCircle
      // placeholder={<IllustratedMessage name={IllustrationMessageType.NoData} />}
    >
      <ObjectPageSection titleText="Reviews" id="reviews" aria-label="Reviews">
        <ReviewsSection />
      </ObjectPageSection>
    </ObjectPage>
  );
}

export default Product;
