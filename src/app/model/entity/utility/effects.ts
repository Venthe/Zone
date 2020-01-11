export interface Effect {
  type: string;
}

export const AttributeModifier = (attribute, value): Effect & any => ({
  type: "attributeModifier",
  payload: {
    attribute,
    value
  }
});

export const SkillModifier = (skill, value): Effect & any => ({
  type: "attributeModifier",
  payload: {
    skill,
    value
  }
});

export const DerivativeAttributeModifier = (derivedAttributeName, value): Effect & any => ({
  type: "attributeModifier",
  payload: {
    derivedAttributeName,
    value
  }
});

export const MoreViolentDeathAnimations = (): Effect & any => ({
  type: "moreViolentDeathAnimations"
});
