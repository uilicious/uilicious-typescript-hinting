import UiliciousActor from "./types/actor";
import UiliciousUICommand from "./types/ui";
import UiliciousTestCommand from "./types/test";
import UiliciousSampleCommand from "./types/sample";

declare global {
  const I: UiliciousActor;
  const UI: UiliciousUICommand;
  const TEST: UiliciousTestCommand;
  const SAMPLE: UiliciousSampleCommand;
}

export {};
