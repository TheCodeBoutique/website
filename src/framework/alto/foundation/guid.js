// ============================================================================================
// Project: PinnacleRacing.io - Modern software solutions for Competitive Remote Control Racing
// Copyright: @2017 Pinnacle Racing, LLC
// License: Property of Pinnacle Racing and Chad Eubanks
// Author: Chad Eubanks
// ============================================================================================

let __alto__uuid__ = 0;

let generateGuid = function () {
    let uuid = `alto${__alto__uuid__ ++}`;
    return uuid;
};

export default generateGuid;