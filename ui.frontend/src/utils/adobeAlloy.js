const alloy = window.alloy;

export const initAlloy = () => {
  alloy("configure", {
    edgeConfigId: "85470733-9452-4607-854e-356084ff7283",
    orgId: "098C9DBF5853A52E0A495D2E@AdobeOrg",
    debugEnabled: true
  });
};

export const trackPageView = (pageName) => {
  alloy("sendEvent", {
    xdm: {
      eventType: "page-view",
      web: {
        webPageDetails: {
          name: pageName
        }
      }
    }
  });
};
