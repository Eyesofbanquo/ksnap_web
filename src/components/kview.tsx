import React, { useState, useEffect } from "react";
import icon from "../resources/icon_ky.svg";

import Prismic from "@prismicio/client";
import { Date, Link, RichText } from "prismic-reactjs";
import ApiSearchResponse from "@prismicio/client/types/ApiSearchResponse";

const API_ENDPOINT = "https://kyrinne.cdn.prismic.io/api/v2";

const Client = Prismic.client(API_ENDPOINT);

export const KView: React.FC = () => {
  const [doc, setDocData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at("document.type", "homepage")
      );

      if (response) {
        const result = response.results[0];
        console.log(response);

        setDocData((prev) => {
          return result;
        });
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {doc && (
        <div className="App-header">
          <img src={icon} alt="logo" className="Lock" />

          <h3>{doc.data.header[0].text}</h3>
          <p>{doc.data.body[0].text}</p>
        </div>
      )}
      {doc == null && (
        <div className="App-header">
          <img src={icon} alt="logo" className="Lock" />
        </div>
      )}
    </div>
  );
};
