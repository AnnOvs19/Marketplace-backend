module.exports = ({ env }) => ({
  transformer: {
    enabled: true,
    config: {
      prefix: "/api/",
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
    },
  },
  "strapi-plugin-populate-deep": {
    config: {
      defaultDepth: 5, // Default is 5
    },
  },
  "users-permissions": {
    config: {
      register: {
        allowedFields: ["phone", "sity", "adress"],
      },
    },
  },
});
