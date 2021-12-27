import React, { useState, useEffect } from "react";
import { ObjectPage } from "@ui5/webcomponents-react/dist/ObjectPage";
import { IllustratedMessage } from "@ui5/webcomponents-react/dist/IllustratedMessage";
import { IllustrationMessageType } from "@ui5/webcomponents-react/dist/IllustrationMessageType";
import { Avatar } from "@ui5/webcomponents-react/dist/Avatar";
import ObjectTitle from "../../components/ObjectPage/ObjectTitle";
import ObjectHeader from "../../components/ObjectPage/ObjectHeader";
import "@ui5/webcomponents-fiori/dist/illustrations/NoData.js";
import "@ui5/webcomponents-icons/dist/product";
import { ObjectPageSection } from "@ui5/webcomponents-react";
import ReviewsSection from "./ReviewsSection";
import { useParams } from "react-router-dom";
import getProducts from "../../hooks/Products";
import Navbar from "../../components/Navbar/Navbar";
import Helmet from "react-helmet";

function Product(props) {
  let params = useParams();
  let productId = params.id;

  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(getProducts(productId));
  }, [productId]);

  return (
    <>
      <Navbar />
      <Helmet
        title={`UI5 Shop - Products | ${product ? product.title : 404}`}
      />
      <ObjectPage
        slot={props.slot}
        headerTitle={ObjectTitle({ object: product })}
        headerContent={ObjectHeader(product)}
        style={{ height: "100vh" }}
        image={
          product?.image ?? (
            <Avatar size="XL" icon="product" colorScheme="Accent5" />
          )
        }
        imageShapeCircle
        placeholder={
          !product && (
            <IllustratedMessage name={IllustrationMessageType.NoData} />
          )
        }
      >
        <ObjectPageSection
          titleText="Reviews"
          id="reviews"
          aria-label="Reviews"
        >
          <ReviewsSection />
        </ObjectPageSection>
      </ObjectPage>
    </>
  );
}

export default Product;
