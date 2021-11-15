import React from "react";
import { ObjectPage } from "@ui5/webcomponents-react/dist/ObjectPage";
import { IllustratedMessage } from "@ui5/webcomponents-react/dist/IllustratedMessage";
import { IllustrationMessageType } from "@ui5/webcomponents-react/dist/IllustrationMessageType";
import { Avatar } from "@ui5/webcomponents-react/dist/Avatar";
import ObjectTitle from "../../components/ObjectPage/ObjectTitle";
import ObjectHeader from "../../components/ObjectPage/ObjectHeader";
import "@ui5/webcomponents-fiori/dist/illustrations/NoData.js";
import "@ui5/webcomponents-icons/dist/product";

function Product() {
  return (
    <ObjectPage
      headerTitle={<ObjectTitle title="Product Red" />}
      headerContent={<ObjectHeader />}
      style={{ height: "100vh" }}
      image={<Avatar size="L" icon="product" colorScheme="Accent5" />}
      imageShapeCircle
      placeholder={<IllustratedMessage name={IllustrationMessageType.NoData} />}
    />
  );
}

export default Product;
