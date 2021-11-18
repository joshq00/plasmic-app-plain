// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: w2MRviqAZEsTN3LAdZ9t15
// Component: X9YlzjuZzAW
import * as React from "react";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import { ThemeValue, useTheme } from "./PlasmicGlobalVariant__Theme"; // plasmic-import: LITHxF3RLMX/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_todo_mvc.module.css"; // plasmic-import: w2MRviqAZEsTN3LAdZ9t15/projectcss
import * as sty from "./PlasmicHeader.module.css"; // plasmic-import: X9YlzjuZzAW/css

export type PlasmicHeader__VariantMembers = {
  state: "empty" | "allChecked";
};

export type PlasmicHeader__VariantsArgs = {
  state?: SingleChoiceArg<"empty" | "allChecked">;
};

type VariantPropType = keyof PlasmicHeader__VariantsArgs;
export const PlasmicHeader__VariantProps = new Array<VariantPropType>("state");

export type PlasmicHeader__ArgsType = {};
type ArgPropType = keyof PlasmicHeader__ArgsType;
export const PlasmicHeader__ArgProps = new Array<ArgPropType>();

export type PlasmicHeader__OverridesType = {
  headerContainer?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  textInput?: p.Flex<"input">;
};

export interface DefaultHeaderProps {
  state?: SingleChoiceArg<"empty" | "allChecked">;
  className?: string;
}

function PlasmicHeader__RenderFunc(props: {
  variants: PlasmicHeader__VariantsArgs;
  args: PlasmicHeader__ArgsType;
  overrides: PlasmicHeader__OverridesType;
  dataFetches?: PlasmicHeader__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    theme: useTheme()
  });

  return (
    <div
      data-plasmic-name={"headerContainer"}
      data-plasmic-override={overrides.headerContainer}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        defaultcss.all,
        projectcss.all,
        projectcss.root_reset,
        sty.headerContainer,
        {
          [sty.headerContainer__global_theme_dark]: hasVariant(
            globalVariants,
            "theme",
            "dark"
          ),
          [sty.headerContainer__state_allChecked]: hasVariant(
            variants,
            "state",
            "allChecked"
          ),
          [sty.headerContainer__state_empty]: hasVariant(
            variants,
            "state",
            "empty"
          )
        }
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(defaultcss.all, projectcss.all, sty.freeBox, {
          [sty.freeBox__state_empty]: hasVariant(variants, "state", "empty")
        })}
      >
        {(hasVariant(variants, "state", "empty") ? false : true) ? (
          <p.PlasmicImg
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img, {
              [sty.img__global_theme_dark]: hasVariant(
                globalVariants,
                "theme",
                "dark"
              ),
              [sty.img__state_allChecked]: hasVariant(
                variants,
                "state",
                "allChecked"
              ),
              [sty.img__state_empty]: hasVariant(variants, "state", "empty")
            })}
            displayHeight={"30px" as const}
            displayMaxHeight={"none" as const}
            displayMaxWidth={"none" as const}
            displayMinHeight={"0" as const}
            displayMinWidth={"0" as const}
            displayWidth={"30px" as const}
            src={
              hasVariant(globalVariants, "theme", "dark")
                ? ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxMiA2IiBoZWlnaHQ9IjYiIHdpZHRoPSIxMiIgc3R5bGU9ImZpbGw6IHJnYigyMTMsIDIwNiwgMjA2KTsiPgo8cGF0aCBmaWxsPSJibGFjayIgZD0iTTAuNjEyIDAuMTEyTDUuODQ0IDMuMjJMMTEuMDc2IDAuMTEyVjIuNUw1Ljg0NCA1LjUyNEwwLjYxMiAyLjQ4OFYwLjExMloiLz4KPC9zdmc+" as const)
                : ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxMiA2IiBoZWlnaHQ9IjYiIHdpZHRoPSIxMiI+CjxwYXRoIGZpbGw9ImJsYWNrIiBkPSJNMC42MTIgMC4xMTJMNS44NDQgMy4yMkwxMS4wNzYgMC4xMTJWMi41TDUuODQ0IDUuNTI0TDAuNjEyIDIuNDg4VjAuMTEyWiIvPgo8L3N2Zz4K" as const)
            }
          />
        ) : null}
      </div>

      <input
        data-plasmic-name={"textInput"}
        data-plasmic-override={overrides.textInput ?? overrides.textbox}
        className={classNames(
          defaultcss.input,
          projectcss.input,
          sty.textInput,
          {
            [sty.textInput__global_theme_dark]: hasVariant(
              globalVariants,
              "theme",
              "dark"
            ),
            [sty.textInput__state_allChecked]: hasVariant(
              variants,
              "state",
              "allChecked"
            ),
            [sty.textInput__state_empty]: hasVariant(variants, "state", "empty")
          }
        )}
        placeholder={"What needs to be done?" as const}
        type={"text" as const}
        value={
          hasVariant(globalVariants, "theme", "dark")
            ? ("My Task" as const)
            : undefined
        }
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  headerContainer: ["headerContainer", "freeBox", "img", "textInput"],
  freeBox: ["freeBox", "img"],
  img: ["img"],
  textInput: ["textInput"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  headerContainer: "div";
  freeBox: "div";
  img: typeof p.PlasmicImg;
  textInput: "input";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeader__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeader__VariantsArgs;
    args?: PlasmicHeader__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicHeader__Fetches;
  } & Omit<PlasmicHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHeader__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHeader__ArgProps,
      internalVariantPropNames: PlasmicHeader__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "headerContainer") {
    func.displayName = "PlasmicHeader";
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("headerContainer"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    img: makeNodeComponent("img"),
    textInput: makeNodeComponent("textInput"),

    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */
