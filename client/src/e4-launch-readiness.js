export function installLaunchReadiness() {
  if (document.getElementById('e4-launch-readiness-style')) return;
  const style = document.createElement('style');
  style.id = 'e4-launch-readiness-style';
  style.textContent = `
    .ref-heading-stack,.ref-top-block,.ref-subhead-row,.ref-detail-panel,.ref-outcome-panel{min-width:0;}
    .ref-heading-main,.ref-detail-heading,.ref-page-summary{overflow-wrap:break-word;max-width:100%;}
    .team-members-div .team-member{opacity:1!important;visibility:visible!important;}
    @media screen and (max-width:767px){
      html body.ref-page-shell .ref-heading-main{font-size:clamp(2rem,8.8vw,2.75rem)!important;line-height:1.04!important;max-width:100%!important;overflow-wrap:anywhere!important;}
      html body.ref-page-shell .ref-heading-stack,html body.ref-page-shell .ref-top-block,html body.ref-page-shell .ref-subhead-row{min-width:0!important;max-width:100%!important;}
      html body.home-service-menu .reference-topbar-brand{box-sizing:border-box!important;min-width:0!important;max-width:100%!important;gap:.7rem!important;padding-right:1.15rem!important;padding-left:1.15rem!important;}
      html body.home-service-menu .reference-topbar-brand .reference-socials{gap:.4rem!important;min-width:0!important;}
      html body.home-service-menu .reference-topbar-brand .reference-socials a{flex:0 0 2rem!important;width:2rem!important;height:2rem!important;}
      html body.home-service-menu .reference-topbar-brand .theme-toggle-label{display:none!important;}
      html body.home-service-menu .reference-topbar-brand .theme-toggle-button{flex:0 0 auto!important;padding:.4rem!important;gap:0!important;margin-left:0!important;}
      html body.home-service-menu .reference-topbar-toggle{flex:0 0 2rem!important;width:2rem!important;margin-left:auto!important;}
      .ref-card-titleband{overflow-wrap:anywhere;}
    }
  `;
  document.head.appendChild(style);
  document.querySelectorAll('.copyright').forEach((node) => {
    node.textContent = node.textContent.replace(/©\s*\d{4}/, `© ${new Date().getFullYear()}`);
  });
}
