import React from "react";
import { Form } from "@ui5/webcomponents-react/dist/Form";
import { Helmet } from "react-helmet";
import {
  FormItem,
  Input,
  TabContainer,
  Tab,
  Button,
  CheckBox,
  FlexBox,
  Link as NavLink,
  FormGroup,
  InputType,
  Select,
  Option,
} from "@ui5/webcomponents-react";

const style = {
  form: { alignItems: "center" },
  button: {
    textAlign: "center",
    maxWidth: "10rem",
    marginBottom: "1rem",
    marginRight: "1rem",
  },
};

function LogIn(props) {
  return (
    <>
      <Helmet title="Shop UI5 - Log In" />
      <TabContainer slot={props.slot} fixed={true} style={{ height: "100vh" }}>
        <Tab text="Sign In" icon="account" selected>
          <FlexBox fitContainer={true} direction="Column" style={style.form}>
            <Form
              titleText="Use your credentials"
              columnsL={1}
              columnsXL={1}
              columnsM={1}
            >
              <FormItem label={"E-mail"}>
                <Input
                  type={InputType.Email}
                  name="mail"
                  placeholder="your@mail.com"
                  required
                />
              </FormItem>
              <FormItem label="Password">
                <Input
                  type={InputType.Password}
                  placeholder="Your password"
                  name="password"
                  required
                />
              </FormItem>
              <FormItem label="Remember Me">
                <CheckBox />
              </FormItem>
            </Form>
            <Button
              style={style.button}
              design="Emphasized"
              children="Sign In"
              submits
            />
            <NavLink style={style.button}>Forgot Password?</NavLink>
            <NavLink style={style.button} href="/products">
              Go to Home
            </NavLink>
          </FlexBox>
        </Tab>
        <Tab text="Sign Up" icon="create-form">
          <FlexBox fitContainer={true} direction="Column">
            <Form title="Register" columnsL={1} columnsXL={1} columnsM={1}>
              <FormGroup titleText={"Personal Data"}>
                <FormItem label={"Full Name"}>
                  <Input type={InputType.Text} placeholder="Robert Smith" />
                </FormItem>
                <FormItem label={"Address"}>
                  <Input
                    type={InputType.Text}
                    placeholder="Mozart 2300, C1407 CABA"
                  />
                </FormItem>
                <FormItem label={"Country"}>
                  <Select>
                    <Option>Argentina</Option>
                    <Option>Germany</Option>
                    <Option>France</Option>
                    <Option>Italy</Option>
                  </Select>
                </FormItem>
              </FormGroup>
              <FormGroup titleText={"Account Details"}>
                <FormItem label={"E-mail"}>
                  <Input
                    type={InputType.Email}
                    name="mail"
                    placeholder="your@mail.com"
                    required
                  />
                </FormItem>
                <FormItem label="Password">
                  <Input
                    type={InputType.Password}
                    placeholder="A password"
                    name="password"
                    required
                  />
                </FormItem>
                <FormItem label="Repeat your Password">
                  <Input
                    type={InputType.Password}
                    placeholder="Repeat the password"
                    name="password-confirm"
                    required
                  />
                </FormItem>
              </FormGroup>
            </Form>
            <FlexBox justifyContent="Center">
              <Button
                style={style.button}
                design="Emphasized"
                children="Sign Up"
                submits
              />
              <NavLink style={style.button}>
                Already have an account? Sign In
              </NavLink>
            </FlexBox>
          </FlexBox>
        </Tab>
      </TabContainer>
    </>
  );
}

export default LogIn;
