// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: w2MRviqAZEsTN3LAdZ9t15
// Component: Yr59wdkNirP
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
import Header from "../../Header"; // plasmic-import: X9YlzjuZzAW/component
import Task from "../../Task"; // plasmic-import: ycr20lmMt4Z/component
import Footer from "../../Footer"; // plasmic-import: gSYNnNwHbQn/component

import { ThemeValue, useTheme } from "./PlasmicGlobalVariant__Theme"; // plasmic-import: LITHxF3RLMX/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_todo_mvc.module.css"; // plasmic-import: w2MRviqAZEsTN3LAdZ9t15/projectcss
import * as sty from "./PlasmicTodoApp.module.css"; // plasmic-import: Yr59wdkNirP/css

export type PlasmicTodoApp__VariantMembers = {
  state: "empty";
};

export type PlasmicTodoApp__VariantsArgs = {
  state?: SingleChoiceArg<"empty">;
};

type VariantPropType = keyof PlasmicTodoApp__VariantsArgs;
export const PlasmicTodoApp__VariantProps = new Array<VariantPropType>("state");

export type PlasmicTodoApp__ArgsType = {};
type ArgPropType = keyof PlasmicTodoApp__ArgsType;
export const PlasmicTodoApp__ArgProps = new Array<ArgPropType>();

export type PlasmicTodoApp__OverridesType = {
  root?: p.Flex<"div">;
  appTitle?: p.Flex<"div">;
  appBody?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  tasksContainer?: p.Flex<"div">;
  footer?: p.Flex<typeof Footer>;
  fakeStack?: p.Flex<"div">;
};

export interface DefaultTodoAppProps {
  state?: SingleChoiceArg<"empty">;
  className?: string;
}

function PlasmicTodoApp__RenderFunc(props: {
  variants: PlasmicTodoApp__VariantsArgs;
  args: PlasmicTodoApp__ArgsType;
  overrides: PlasmicTodoApp__OverridesType;
  dataFetches?: PlasmicTodoApp__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    theme: useTheme()
  });

  return (
    <React.Fragment>
      {}
      {}

      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.all,
            projectcss.root_reset,
            sty.root,
            {
              [sty.root__global_theme_dark]: hasVariant(
                globalVariants,
                "theme",
                "dark"
              ),
              [sty.root__state_empty]: hasVariant(variants, "state", "empty")
            }
          )}
        >
          <div
            data-plasmic-name={"appTitle"}
            data-plasmic-override={overrides.appTitle}
            className={classNames(
              defaultcss.all,
              projectcss.all,
              defaultcss.__wab_text,
              sty.appTitle,
              {
                [sty.appTitle__global_theme_dark]: hasVariant(
                  globalVariants,
                  "theme",
                  "dark"
                )
              }
            )}
          >
            {"todos"}
          </div>

          <div
            className={classNames(
              defaultcss.all,
              projectcss.all,
              sty.freeBox___3Ulwa,
              {
                [sty.freeBox__global_theme_dark___3UlwagFk4V]: hasVariant(
                  globalVariants,
                  "theme",
                  "dark"
                )
              }
            )}
          >
            <div
              data-plasmic-name={"appBody"}
              data-plasmic-override={overrides.appBody}
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.appBody,
                {
                  [sty.appBody__global_theme_dark]: hasVariant(
                    globalVariants,
                    "theme",
                    "dark"
                  )
                }
              )}
            >
              <Header
                data-plasmic-name={"header"}
                data-plasmic-override={overrides.header}
                className={classNames("__wab_instance", sty.header, {
                  [sty.header__global_theme_dark]: hasVariant(
                    globalVariants,
                    "theme",
                    "dark"
                  ),
                  [sty.header__state_empty]: hasVariant(
                    variants,
                    "state",
                    "empty"
                  )
                })}
                state={
                  hasVariant(variants, "state", "empty")
                    ? ("empty" as const)
                    : undefined
                }
              />

              {(hasVariant(variants, "state", "empty") ? false : true) ? (
                <div
                  data-plasmic-name={"tasksContainer"}
                  data-plasmic-override={overrides.tasksContainer}
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    sty.tasksContainer,
                    {
                      [sty.tasksContainer__state_empty]: hasVariant(
                        variants,
                        "state",
                        "empty"
                      )
                    }
                  )}
                >
                  <Task
                    className={classNames("__wab_instance", sty.task__rf28T, {
                      [sty.task__global_theme_dark__rf28TgFk4V]: hasVariant(
                        globalVariants,
                        "theme",
                        "dark"
                      ),
                      [sty.task__state_empty__rf28T9LjNd]: hasVariant(
                        variants,
                        "state",
                        "empty"
                      )
                    })}
                  >
                    {"Some kind of text here"}
                  </Task>

                  <Task
                    className={classNames("__wab_instance", sty.task__q7QYu, {
                      [sty.task__global_theme_dark__q7QYugFk4V]: hasVariant(
                        globalVariants,
                        "theme",
                        "dark"
                      )
                    })}
                    state={"editing" as const}
                  >
                    {"Some kind of text here"}
                  </Task>

                  <Task
                    className={classNames("__wab_instance", sty.task__vwtus)}
                    state={"checked" as const}
                  >
                    {"Some kind of text here"}
                  </Task>

                  <Task
                    className={classNames("__wab_instance", sty.task__f83O)}
                  >
                    {"I have a task to do something that takes a long time"}
                  </Task>
                </div>
              ) : null}
              {(hasVariant(variants, "state", "empty") ? false : true) ? (
                <Footer
                  data-plasmic-name={"footer"}
                  data-plasmic-override={overrides.footer}
                  className={classNames("__wab_instance", sty.footer, {
                    [sty.footer__state_empty]: hasVariant(
                      variants,
                      "state",
                      "empty"
                    )
                  })}
                  count={"2"}
                  state={["hasCompleted"]}
                />
              ) : null}
            </div>

            {(hasVariant(variants, "state", "empty") ? false : true) ? (
              <div
                data-plasmic-name={"fakeStack"}
                data-plasmic-override={overrides.fakeStack}
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.fakeStack,
                  {
                    [sty.fakeStack__state_empty]: hasVariant(
                      variants,
                      "state",
                      "empty"
                    )
                  }
                )}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    sty.freeBox___1G3Gg,
                    {
                      [sty.freeBox__global_theme_dark___1G3GgGFk4V]: hasVariant(
                        globalVariants,
                        "theme",
                        "dark"
                      )
                    }
                  )}
                />

                <div
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    sty.freeBox__xmiO,
                    {
                      [sty.freeBox__global_theme_dark__xmiOGFk4V]: hasVariant(
                        globalVariants,
                        "theme",
                        "dark"
                      )
                    }
                  )}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "appTitle",
    "appBody",
    "header",
    "tasksContainer",
    "footer",
    "fakeStack"
  ],
  appTitle: ["appTitle"],
  appBody: ["appBody", "header", "tasksContainer", "footer"],
  header: ["header"],
  tasksContainer: ["tasksContainer"],
  footer: ["footer"],
  fakeStack: ["fakeStack"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  appTitle: "div";
  appBody: "div";
  header: typeof Header;
  tasksContainer: "div";
  footer: typeof Footer;
  fakeStack: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTodoApp__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTodoApp__VariantsArgs;
    args?: PlasmicTodoApp__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicTodoApp__Fetches;
  } & Omit<PlasmicTodoApp__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTodoApp__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicTodoApp__ArgProps,
      internalVariantPropNames: PlasmicTodoApp__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicTodoApp__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTodoApp";
  } else {
    func.displayName = `PlasmicTodoApp.${nodeName}`;
  }
  return func;
}

export const PlasmicTodoApp = Object.assign(
  // Top-level PlasmicTodoApp renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    appTitle: makeNodeComponent("appTitle"),
    appBody: makeNodeComponent("appBody"),
    header: makeNodeComponent("header"),
    tasksContainer: makeNodeComponent("tasksContainer"),
    footer: makeNodeComponent("footer"),
    fakeStack: makeNodeComponent("fakeStack"),

    // Metadata about props expected for PlasmicTodoApp
    internalVariantProps: PlasmicTodoApp__VariantProps,
    internalArgProps: PlasmicTodoApp__ArgProps
  }
);

export default PlasmicTodoApp;
/* prettier-ignore-end */
