import React from "react";
import { DynamicPageTitle } from "@ui5/webcomponents-react/dist/DynamicPageTitle";
import { Title } from "@ui5/webcomponents-react/dist/Title";
import { TitleLevel } from "@ui5/webcomponents-react/dist/TitleLevel";
import { Breadcrumbs } from "@ui5/webcomponents-react/dist/Breadcrumbs";
import { BreadcrumbsItem } from "@ui5/webcomponents-react/dist/BreadcrumbsItem";
import { Badge } from "@ui5/webcomponents-react/dist/Badge";
import { Icon } from "@ui5/webcomponents-react/dist/Icon";
import ObjectAttribute from "./ObjectAttribute";
import HeaderAction from "../Actions/HeaderAction";
import ObjectNumber from "./ObjectNumber";

function ObjectTitle({ title = "Unnamed Product", id = "RM034LPS" }) {
  return (
    <DynamicPageTitle
      header={
        <Title level={TitleLevel.H4} tooltip="Product Name">
          {title}
        </Title>
      }
      subHeader={<ObjectAttribute text={id} icon="bar-code" tooltip="SKU" />}
      breadcrumbs={
        <Breadcrumbs>
          <BreadcrumbsItem>Products</BreadcrumbsItem>
          <BreadcrumbsItem>{title}</BreadcrumbsItem>
        </Breadcrumbs>
      }
      tooltip="Product details"
      actions={
        <HeaderAction text="Add to Cart" design="Positive" icon="cart-4" />
      }
    >
      <Badge
        icon={<Icon name="lead" />}
        colorScheme="7"
        tooltip="Pricing"
        children={<ObjectNumber number="1999.99" />}
      />
    </DynamicPageTitle>
  );
}

export default ObjectTitle;
