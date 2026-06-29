exports.onExecutePreUserRegistration = async (event, api) => {
  const userType = event.request.body?.user_type;
  if (userType && ['personal', 'business'].includes(userType)) {
    api.user.setUserMetadata('user_type', userType);
  }
};
