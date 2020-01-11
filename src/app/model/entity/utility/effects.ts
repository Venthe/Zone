export const AttributeModifier = (attribute, value) => ({
  type: "attributeModifier",
  payload: {
    attribute,
    value
  }
});

export const SkillModifier = (skill, value) => ({
  type: "attributeModifier",
  payload: {
    skill,
    value
  }
});

export const DerivativeAttributeModifier = (derivedAttributeName, value) => ({
  type: "attributeModifier",
  payload: {
    derivedAttributeName,
    value
  }
});

export const MoreViolentDeathAnimations = () => ({
  type: "moreViolentDeathAnimations"
});
