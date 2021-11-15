import React from "react";
import { DynamicPageTitle } from "@ui5/webcomponents-react/dist/DynamicPageTitle";
import { Title } from "@ui5/webcomponents-react/dist/Title";
import { TitleLevel } from "@ui5/webcomponents-react/dist/TitleLevel";
import { Breadcrumbs } from "@ui5/webcomponents-react/dist/Breadcrumbs";
import { BreadcrumbsItem } from "@ui5/webcomponents-react/dist/BreadcrumbsItem";
import { Label } from "@ui5/webcomponents-react";

function ObjectTitle({ title = "Unnamed Product", id = "RM034LPS" }) {
  return (
    <DynamicPageTitle
      header={
        <Title level={TitleLevel.H4} tooltip="Product Name">
          {title}
        </Title>
      }
      subHeader={<Label tooltip="SKU">{id}</Label>}
      breadcrumbs={
        <Breadcrumbs>
          <BreadcrumbsItem>Products</BreadcrumbsItem>
          <BreadcrumbsItem>{title}</BreadcrumbsItem>
        </Breadcrumbs>
      }
      tooltip="Product details"
    />
  );
}

export default ObjectTitle;
