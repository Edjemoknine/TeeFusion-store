"use client";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import Navigation from "./nav";
type MenuProps = {
  openNav: boolean;
  setOpenNav: (ite: boolean) => void;
};
const MobileNav = ({ openNav, setOpenNav }: MenuProps) => {
  return (
    <Sheet onOpenChange={setOpenNav} open={openNav}>
      <SheetContent>
        <Navigation />
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
