export const getComponentName = (fileName) =>
  fileName
    // Remove the "./" from the beginning
    .replace(/^\.\//, "")
    // Remove the file extension from the end
    .replace(/\.\w+$/, "")
    // Split up kebabs
    .split("-")
    // Upper case
    .map((kebab) => kebab.charAt(0).toUpperCase() + kebab.slice(1))
    .join("");

const requireComponent = require.context(
  "./components",
  false,
  /J[A-Z]\w+\.(vue|js)$/
);

console.log(requireComponent.keys());

export const registerComponents = (app) =>
  requireComponent.keys().forEach((fileName) => {
    const componentConfig = requireComponent(fileName);

    const componentName = getComponentName(fileName);

    app.component(componentName, componentConfig.default || componentConfig);
  });
