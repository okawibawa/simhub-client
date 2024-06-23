export const parseSetCookieString = (setCookieString: string) => {
  const stringProperties = setCookieString
    .split(";")
    .map((stringProperty) => stringProperty.trim());
  const [nameValue, ...options] = stringProperties;
  const [name, value] = nameValue.split("=");
  const parsedOptions: any = {};

  options.forEach((option) => {
    const [key, value] = option.split("=");

    parsedOptions[key.toLowerCase()] = value || true;
  });

  return {
    name,
    value,
    options: {
      maxAge: parsedOptions["max-age"]
        ? parseInt(parsedOptions["max-age"])
        : undefined,
      expires: parsedOptions.expires
        ? new Date(parsedOptions.expires)
        : undefined,
      httpOnly: "httponly" in parsedOptions,
      secure: "secure" in parsedOptions,
      path: parsedOptions.path,
      domain: parsedOptions.domain,
      sameSite: parsedOptions.samesite
        ? parsedOptions.samesite.toLowerCase()
        : undefined,
    },
  };
};
