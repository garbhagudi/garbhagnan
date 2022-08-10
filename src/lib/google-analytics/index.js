export const pageview = (url) => {
  window.gtag("config", "G-852ET6BST6", {
    path_url: url,
  });
};
