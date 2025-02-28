import { SortingFilter } from "../../SortingFilter";
import { MenuGrouped, List, Item, StyledNavLink, SortSection } from "../styled";
import {
  toAll,
  toMeatLovers,
  toVegetarian,
  toBBQ,
  toSpicy,
  toCalzone,
} from "../../../routes";

export const Menu = ({ setSortedItems }) => {
  return (
    <MenuGrouped>
      <List>
        <Item>
          <StyledNavLink to={toAll()}>🍕 All</StyledNavLink>
        </Item>
        <Item>
          <StyledNavLink to={toMeatLovers()}>🥩 Meat Lovers</StyledNavLink>
        </Item>
        <Item>
          <StyledNavLink to={toVegetarian()}>🌿 Vegetarian</StyledNavLink>
        </Item>
        <Item>
          <StyledNavLink to={toBBQ()}>🍗 BBQ</StyledNavLink>
        </Item>
        <Item>
          <StyledNavLink to={toSpicy()}>🌶️ Spicy</StyledNavLink>
        </Item>
        <Item>
          <StyledNavLink to={toCalzone()}>🥟 Calzone</StyledNavLink>
        </Item>
      </List>
      <SortSection>
        <SortingFilter setSortedItems={setSortedItems} />
      </SortSection>
    </MenuGrouped>
  );
};
