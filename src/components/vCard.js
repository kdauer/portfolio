import React from "react";
import { Link } from "react-router-dom";

export default function vCard() {
  return (
    <div>
      <Link to="/k.vcf" target="_blank" download></Link>
    </div>
  );
}
