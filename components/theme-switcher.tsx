"use client";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import { Label } from "./ui/label";

export default function ThemeSwitcher({ inputOnly }: { inputOnly?: boolean }) {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  if (inputOnly) {
    return (
      <div className="flex items-center justify-between">
        <Label htmlFor="dark-mode">
          {theme === "dark" ? "Dark mode is on" : "Light mode is on"}
        </Label>
        <Switch
          id="dark-mode"
          checked={theme === "dark"}
          onCheckedChange={handleThemeChange}
        />
      </div>
    );
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Appearance</CardTitle>
        <CardDescription>
          Customize how My Quiz looks on your device.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="dark-mode">Dark Mode</Label>
          <Switch
            id="dark-mode"
            checked={theme === "dark"}
            onCheckedChange={handleThemeChange}
          />
        </div>
        <div className="text-sm text-muted-foreground">
          {theme === "dark" ? (
            <Moon className="inline-block mr-2" />
          ) : (
            <Sun className="inline-block mr-2" />
          )}
          {theme === "dark" ? "Dark mode is on" : "Light mode is on"}
        </div>
      </CardContent>
    </Card>
  );
}
