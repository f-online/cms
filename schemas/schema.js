// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// import objects
import sectionObject from "../objects/section";
import quoteObject from "../objects/quote";
import teamObject from "../objects/team";
import faqObject from "../objects/faq";
import reviewObject from "../objects/review";

// Import schemas
import faq from "./faq";
import review from "./review";
import team from "./team";
import country from "./country";
import staticPage from "./staticPage";
import feature from "./feature";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    sectionObject,
    quoteObject,
    teamObject,
    faqObject,
    reviewObject,
    team,
    review,
    feature,
    faq,
    country,
    staticPage,
  ]),
});
