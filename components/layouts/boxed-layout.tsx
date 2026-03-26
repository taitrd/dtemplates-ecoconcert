interface BoxedLayoutProps {
  children: React.ReactNode
}

export function BoxedLayout({ children }: BoxedLayoutProps) {
  return (
    <div className="mx-auto max-w-[1920px] bg-white shadow-xl">
      {children}
    </div>
  )
}

