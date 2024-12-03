import HOOFile from "./HOOFile";
import { symset } from "../SymbolSet";

const Template = (args) => <HOOFile {...args} />;

export default {
  title: "Components/Inputs/HOOFile",
  component: HOOFile,
};

export const Basic = {
  render: Template.bind({}),
  name: "Basic",

  args: (function () {
    symset.initSymbols();

    return {
      uploadLabel: "Click or drag and drop files here to upload filed",
      uploadDescription: "Max file size: 10MB, Types: jpg, png, pdf",
      onChanged: (files) => {
        const fileNames = [];
        if (files != null && files.length > 0) {
          for (let i = 0; i < files.length; i++) {
            fileNames.push(files[i].name);
          }
        }
        alert(`Files: ${fileNames.join(", ")}`);
      },
    };
  })(),
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: (function () {
    symset.initSymbols();

    return {
      uploadLabel: "Click or drag and drop files here to upload filed",
      uploadDescription: "Max file size: 10MB, Types: jpg, png, pdf",
      onChanged: (files) => {
        alert(`Files ${files.join(",")}`);
      },
      rootElementAttributes: {
        style: {
          backgroundColor: "pink",
        },
      },
    };
  })(),
};
