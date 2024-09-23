import { type ComponentPropsWithoutRef, type FC, type ReactNode } from "react";

import { tw } from "@/utils/lib";

interface BaseProps {
  children?: ReactNode;
  className?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Text: { [key: string]: FC<any> } = {};

Text.h1 = ({
  children,
  className,
  ...props
}: BaseProps & ComponentPropsWithoutRef<"h1">) => (
  <h1
    className={tw(
      "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      className,
    )}
    {...props}
  >
    {children}
  </h1>
);

Text.h2 = ({
  children,
  className,
  ...props
}: BaseProps & ComponentPropsWithoutRef<"h2">) => (
  <h2
    className={tw(
      "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
      className,
    )}
    {...props}
  >
    {children}
  </h2>
);

Text.h3 = ({
  children,
  className,
  ...props
}: BaseProps & ComponentPropsWithoutRef<"h3">) => (
  <h3
    className={tw(
      "scroll-m-20 text-2xl font-semibold tracking-tight",
      className,
    )}
    {...props}
  >
    {children}
  </h3>
);

Text.h4 = ({
  children,
  className,
  ...props
}: BaseProps & ComponentPropsWithoutRef<"h4">) => (
  <h4
    className={tw(
      "scroll-m-20 text-xl font-semibold tracking-tight",
      className,
    )}
    {...props}
  >
    {children}
  </h4>
);

Text.p = ({
  children,
  className,
  ...props
}: BaseProps & ComponentPropsWithoutRef<"p">) => (
  // [&: not(: first - child)]: mt - 6
  <p className={tw("leading-7", className)} {...props}>
    {children}
  </p>
);

Text.quote = ({
  children,
  className,
  ...props
}: BaseProps & ComponentPropsWithoutRef<"blockquote">) => (
  <blockquote
    className={tw("mt-6 border-l-2 pl-6 italic", className)}
    {...props}
  >
    {children}
  </blockquote>
);

Text.ul = ({
  children,
  className,
  ...props
}: BaseProps & ComponentPropsWithoutRef<"ul">) => (
  <ul className={tw("my-6 ml-6 list-disc [&>li]:mt-2", className)} {...props}>
    {children}
  </ul>
);

Text.li = ({
  children,
  className,
  ...props
}: BaseProps & ComponentPropsWithoutRef<"li">) => (
  <li className={tw("my-6 ml-6 list-disc [&>li]:mt-2", className)} {...props}>
    {children}
  </li>
);

Text.code = ({
  children,
  className,
  ...props
}: BaseProps & ComponentPropsWithoutRef<"code">) => (
  <code
    className={tw(
      "bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      className,
    )}
    {...props}
  >
    {children}
  </code>
);

Text.lead = ({
  children,
  className,
  ...props
}: BaseProps & ComponentPropsWithoutRef<"p">) => (
  <p className={tw("text-muted-foreground text-xl", className)} {...props}>
    {children}
  </p>
);

Text.sm = ({
  children,
  className,
  ...props
}: BaseProps & ComponentPropsWithoutRef<"small">) => (
  <small
    className={tw("text-sm font-medium leading-none", className)}
    {...props}
  >
    {children}
  </small>
);

Text.mute = ({
  children,
  className,
  ...props
}: BaseProps & ComponentPropsWithoutRef<"p">) => (
  <p className={tw("text-sm text-gray-500", className)} {...props}>
    {children}
  </p>
);

export default Text;
