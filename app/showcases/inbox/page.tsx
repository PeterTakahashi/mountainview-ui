"use client";

import * as React from "react";
import {
  ArchiveIcon,
  InboxIcon,
  MenuIcon,
  PencilIcon,
  ReplyIcon,
  SendIcon,
  StarIcon,
  Trash2Icon,
} from "lucide-react";

import { ShowcaseFrame } from "@/components/site/showcase-frame";
import { Button } from "@/registry/mountainview-ui/button";
import { Chip } from "@/registry/mountainview-ui/chip";
import { Divider } from "@/registry/mountainview-ui/divider";
import { Fab } from "@/registry/mountainview-ui/fab";
import { IconButton } from "@/registry/mountainview-ui/icon-button";
import { List, ListItem } from "@/registry/mountainview-ui/list";
import {
  ModalNavigationDrawer,
  NavigationDrawer,
  NavigationDrawerHeadline,
  NavigationDrawerItem,
} from "@/registry/mountainview-ui/navigation-drawer";
import { SearchBar } from "@/registry/mountainview-ui/search-bar";
import { snackbar, Snackbars } from "@/registry/mountainview-ui/snackbar";

const messages = [
  { from: "Priya Sharma", subject: "Design crit notes", preview: "Sharing the takeaways from today — the nav drawer indicator felt right to everyone…", time: "9:41 AM", unread: true, initial: "P", hue: "#6750a4" },
  { from: "Fig Tree Café", subject: "Order ready for pickup", preview: "One flat white and an almond croissant are waiting at the counter.", time: "8:56 AM", unread: true, initial: "F", hue: "#006e1c" },
  { from: "Marcus Webb", subject: "Re: Q3 roadmap", preview: "This looks solid. One thought on the migration timeline — could we move the registry…", time: "Yesterday", unread: false, initial: "M", hue: "#00639b" },
  { from: "Aerial Weekly", subject: "Issue 128: The grid returns", preview: "Why layout grids are back, a love letter to hairline borders, and more.", time: "Yesterday", unread: false, initial: "A", hue: "#7d5260" },
  { from: "Cloud Storage", subject: "Storage almost full", preview: "You have used 94% of your plan. Upgrade or free up space to keep syncing.", time: "Tue", unread: false, initial: "C", hue: "#b3261e" },
];

function Avatar({ initial, hue }: { initial: string; hue: string }) {
  return (
    <span
      className="flex size-10 items-center justify-center rounded-full text-title-m text-white"
      style={{ background: hue }}
    >
      {initial}
    </span>
  );
}

function DrawerItems({ active, onSelect }: { active: string; onSelect: (v: string) => void }) {
  return (
    <>
      <NavigationDrawerHeadline>Mail</NavigationDrawerHeadline>
      <NavigationDrawerItem icon={<InboxIcon />} badge="2" active={active === "inbox"} onClick={() => onSelect("inbox")}>
        Inbox
      </NavigationDrawerItem>
      <NavigationDrawerItem icon={<StarIcon />} active={active === "starred"} onClick={() => onSelect("starred")}>
        Starred
      </NavigationDrawerItem>
      <NavigationDrawerItem icon={<SendIcon />} active={active === "sent"} onClick={() => onSelect("sent")}>
        Sent
      </NavigationDrawerItem>
      <Divider className="mx-4 my-2 w-auto" />
      <NavigationDrawerItem icon={<Trash2Icon />} active={active === "trash"} onClick={() => onSelect("trash")}>
        Trash
      </NavigationDrawerItem>
    </>
  );
}

function Reader({ message }: { message: (typeof messages)[number] }) {
  return (
    <article className="flex flex-col gap-4 p-6">
      <div className="flex items-start justify-between gap-3">
        <h1 className="text-headline-s text-on-surface">{message.subject}</h1>
        <Chip className="shrink-0">Inbox</Chip>
      </div>
      <div className="flex items-center gap-3">
        <Avatar initial={message.initial} hue={message.hue} />
        <div className="min-w-0 flex-1">
          <p className="text-title-s text-on-surface">{message.from}</p>
          <p className="text-body-s text-on-surface-variant">to me · {message.time}</p>
        </div>
        <IconButton aria-label="Star"><StarIcon /></IconButton>
      </div>
      <p className="whitespace-pre-line text-body-l leading-relaxed text-on-surface">
        {message.preview}
        {"\n\n"}The full message would continue here — this showcase keeps it
        short so you can focus on the components: the drawer indicator, the
        list rows, the snackbar actions.
      </p>
      <div className="flex gap-2 pt-2">
        <Button variant="outlined"><ReplyIcon /> Reply</Button>
        <Button
          variant="outlined"
          onClick={() => snackbar({ message: "Conversation archived", actionLabel: "Undo" })}
        >
          <ArchiveIcon /> Archive
        </Button>
      </div>
    </article>
  );
}

export default function InboxShowcase() {
  const [mailbox, setMailbox] = React.useState("inbox");
  const [selected, setSelected] = React.useState(0);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const message = messages[selected];

  return (
    <ShowcaseFrame title="Inbox">
      <Snackbars />

      {/* Desktop */}
      <div className="hidden h-[640px] overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-elevation-2)] md:flex">
        <NavigationDrawer className="rounded-none bg-surface-container">
          <div className="px-4 pb-2 pt-1">
            <Fab size="extended" variant="secondary" className="shadow-none" onClick={() => snackbar({ message: "Compose window would open" })}>
              <PencilIcon /> Compose
            </Fab>
          </div>
          <DrawerItems active={mailbox} onSelect={setMailbox} />
        </NavigationDrawer>
        <div className="flex w-[380px] shrink-0 flex-col border-r border-outline-variant">
          <div className="p-3">
            <SearchBar placeholder="Search mail" className="[&>div]:h-12" />
          </div>
          <List className="min-h-0 flex-1 overflow-y-auto bg-transparent py-0">
            {messages.map((m, i) => (
              <ListItem
                key={m.subject}
                leading={<Avatar initial={m.initial} hue={m.hue} />}
                headline={
                  <span className={m.unread ? "font-medium" : undefined}>{m.from}</span>
                }
                supportingText={`${m.subject} — ${m.preview}`}
                trailing={m.time}
                onClick={() => setSelected(i)}
                className={i === selected ? "bg-secondary-container/60" : undefined}
              />
            ))}
          </List>
        </div>
        <div className="min-w-0 flex-1 overflow-y-auto bg-surface">
          <Reader message={message} />
        </div>
      </div>

      {/* Mobile */}
      <div className="relative mx-auto flex h-[calc(100dvh-140px)] max-h-[800px] w-full max-w-md flex-col overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-elevation-2)] md:hidden">
        {mobileOpen ? (
          <div className="flex min-h-0 flex-1 flex-col">
            <div className="flex items-center gap-1 p-2">
              <IconButton aria-label="Back" onClick={() => setMobileOpen(false)}>
                <MenuIcon className="rotate-180" />
              </IconButton>
              <span className="text-title-s text-on-surface">Message</span>
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto">
              <Reader message={message} />
            </div>
          </div>
        ) : (
          <>
            <div className="p-3">
              <SearchBar
                placeholder="Search in mail"
                leading={
                  <ModalNavigationDrawer
                    trigger={
                      <button type="button" aria-label="Menu" className="flex cursor-pointer items-center">
                        <MenuIcon className="size-6" />
                      </button>
                    }
                  >
                    <DrawerItems active={mailbox} onSelect={setMailbox} />
                  </ModalNavigationDrawer>
                }
              />
            </div>
            <p className="px-5 py-1 text-label-m uppercase text-on-surface-variant">
              {mailbox}
            </p>
            <List className="min-h-0 flex-1 overflow-y-auto bg-transparent py-0">
              {messages.map((m, i) => (
                <ListItem
                  key={m.subject}
                  leading={<Avatar initial={m.initial} hue={m.hue} />}
                  headline={<span className={m.unread ? "font-medium" : undefined}>{m.from}</span>}
                  supportingText={m.subject}
                  trailing={m.time}
                  onClick={() => {
                    setSelected(i);
                    setMobileOpen(true);
                  }}
                />
              ))}
            </List>
            <Fab
              aria-label="Compose"
              className="absolute bottom-5 right-5"
              onClick={() => snackbar({ message: "Compose window would open" })}
            >
              <PencilIcon />
            </Fab>
          </>
        )}
      </div>
    </ShowcaseFrame>
  );
}
