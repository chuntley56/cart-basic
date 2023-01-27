import React from "react";
import { render } from "@testing-library/react";

jest.mock("../EmailCaptureForm.view", () => ({
  EmailCaptureFormView: jest.fn(() => null),
}));
