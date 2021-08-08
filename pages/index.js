/** @jsxImportSource theme-ui */

import { useState } from "react";
import { Input, Select, Flex, Box } from "theme-ui";

export default function Home() {
  const [inputValues, setInputValues] = useState({
    name: "",
    headingType: "Heading",
  });

  const [additionalLinesAmount, setAdditionalLinesAmount] = useState(0);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };
  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={`https://api-gov-au-crest-branding.apps.y.cld.gov.au/stacked.png?agency=${
          inputValues.headingType == "Sub-heading" ? "%7C" : ""
        }${inputValues.name}${[...Array(additionalLinesAmount)].map((u, i) => inputValues["name-"+i] === undefined ? '' : `&agency=${
          inputValues["headingType-"+i] == "Sub-heading" ? "%7C" : ""
        }${inputValues["name-"+i] === undefined ? '' : inputValues["name-"+i]}`)}&height=600`}
        style={{ maxWidth: "90vw", width: "450px" }}
      />
      <div sx={{ width: "600px", maxWidth: "90vw", margin: "auto" }}>
        <div sx={{ mb: 2 }}>
          <Select>
            <option>Inline</option>
            <option value="2">Stacked</option>
          </Select>
        </div>
        <Flex sx={{ width: "100%", mt: 2 }}>
          <Select
            placeholder="Choose one"
            sx={{ width: "160px" }}
            name="headingType"
            onChange={handleOnChange}
          >
            <option>Heading</option>
            <option>Sub-heading</option>
          </Select>
          <div sx={{ pl: 2, flexGrow: 1 }}>
            <Input
              placeholder="Agency Name"
              name="name"
              onChange={handleOnChange}
              sx={{}}
            />
          </div>
        </Flex>
        {[...Array(additionalLinesAmount)].map((u, i) => (
          <Flex sx={{ width: "100%", mt: 2 }}>
            <Select
              placeholder="Choose one"
              sx={{ width: "160px" }}
              name={"headingType-" + i}
              onChange={handleOnChange}
            >
              <option>Heading</option>
              <option>Sub-heading</option>
            </Select>
            <div sx={{ pl: 2, flexGrow: 1 }}>
              <Input
                placeholder="Agency Name"
                name={"name-" + i}
                onChange={handleOnChange}
                sx={{}}
              />
            </div>
          </Flex>
        ))}
        <Box
          onClick={() => setAdditionalLinesAmount(additionalLinesAmount + 1)}
          sx={{ fontFamily: "system-ui", mt: 3, cursor: "pointer" }}
        >
          <u>+ add more lines!</u>
        </Box>
      </div>
    </div>
  );
}
