// sanity.config.js
import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk';
import schemas from './schemas/schema';
import { visionTool } from '@sanity/vision';
import deskStructure from './deskStructure';
import { dashboardTool } from "@sanity/dashboard";
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";


export default defineConfig({
    title: "f-online",
    projectId: "t9maew4z",
    dataset: "production",
    plugins: [
        deskTool({
            structure: deskStructure
        }),
        dashboardTool({
            widgets: [
                netlifyWidget({
                    title: "Netlify Deployments",
                    sites: [
                      {
                        title: "Landingpage",
                        apiId: "73158e33-2956-4885-b5d1-3b4990fb4380",
                        buildHookId: "67743c38644e61a55976d306",
                        name: "www.f-online.at",
                      },
                      {
                        title: "Sanity Studio",
                        apiId: "60c53875-54f5-4d90-b67e-aec3038e0853",
                        buildHookId: "6240c027143867130bc4d81e",
                        name: "cms.f-online.at",
                      },
                    ],
                })
            ]
        }),
        visionTool()
    ],
    schema: {
        types: schemas,
    },
});