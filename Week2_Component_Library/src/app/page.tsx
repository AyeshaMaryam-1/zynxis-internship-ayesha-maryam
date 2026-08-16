"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Download,
  ExternalLink,
  Github,
  Loader2,
  Mail,
  Plus,
  Search,
  Settings,
  Trash2,
  User,
  Zap
} from "lucide-react";
import { Button, Card, Modal, Badge, Input } from "@/components/ui";
import { Container, Navbar } from "@/components/layout";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zynxis-950">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-zynxis-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zynxis-accent/10 via-transparent to-transparent" />
        <Container className="relative py-20 md:py-28 text-center">
          <Badge variant="info" className="mb-6">
            Zynxis Design System v1.0
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
            Clean Logic.
            <span className="text-zynxis-accent"> Dark Aesthetics.</span>
          </h1>
          <p className="text-lg md:text-xl text-zynxis-400 max-w-2xl mx-auto mb-10">
            A comprehensive React component library built with TypeScript,
            Tailwind CSS, and accessibility in mind.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Explore Components
            </Button>
            <Button variant="outline" size="lg" leftIcon={<Github className="w-4 h-4" />}>
              View on GitHub
            </Button>
          </div>
        </Container>
      </section>

      {/* Button Showcase */}
      <section id="components" className="component-section border-b border-zynxis-800">
        <Container>
          <div className="mb-12">
            <Badge variant="default" className="mb-3">Buttons</Badge>
            <h2 className="text-3xl font-bold text-white mb-3">Button Variants</h2>
            <p className="text-zynxis-400">Five variants, three sizes, with icons and loading states.</p>
          </div>

          <Card title="Variant Showcase" className="mb-8">
            <div className="space-y-6">
              {/* Primary */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm text-zynxis-500 w-24">Primary</span>
                <Button size="sm">Small</Button>
                <Button>Medium</Button>
                <Button size="lg">Large</Button>
                <Button isLoading>Loading</Button>
                <Button disabled>Disabled</Button>
              </div>

              {/* Secondary */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm text-zynxis-500 w-24">Secondary</span>
                <Button variant="secondary" size="sm">Small</Button>
                <Button variant="secondary">Medium</Button>
                <Button variant="secondary" size="lg">Large</Button>
                <Button variant="secondary" isLoading>Loading</Button>
                <Button variant="secondary" disabled>Disabled</Button>
              </div>

              {/* Ghost */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm text-zynxis-500 w-24">Ghost</span>
                <Button variant="ghost" size="sm">Small</Button>
                <Button variant="ghost">Medium</Button>
                <Button variant="ghost" size="lg">Large</Button>
                <Button variant="ghost" isLoading>Loading</Button>
                <Button variant="ghost" disabled>Disabled</Button>
              </div>

              {/* Outline */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm text-zynxis-500 w-24">Outline</span>
                <Button variant="outline" size="sm">Small</Button>
                <Button variant="outline">Medium</Button>
                <Button variant="outline" size="lg">Large</Button>
                <Button variant="outline" isLoading>Loading</Button>
                <Button variant="outline" disabled>Disabled</Button>
              </div>

              {/* Danger */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm text-zynxis-500 w-24">Danger</span>
                <Button variant="danger" size="sm">Small</Button>
                <Button variant="danger">Medium</Button>
                <Button variant="danger" size="lg">Large</Button>
                <Button variant="danger" isLoading>Loading</Button>
                <Button variant="danger" disabled>Disabled</Button>
              </div>

              {/* With Icons */}
              <div className="pt-4 border-t border-zynxis-800">
                <p className="text-sm text-zynxis-500 mb-3">With Icons</p>
                <div className="flex flex-wrap gap-3">
                  <Button leftIcon={<Plus className="w-4 h-4" />}>Add New</Button>
                  <Button variant="secondary" rightIcon={<ChevronDown className="w-4 h-4" />}>
                    Options
                  </Button>
                  <Button variant="outline" leftIcon={<Download className="w-4 h-4" />}>
                    Download
                  </Button>
                  <Button variant="danger" leftIcon={<Trash2 className="w-4 h-4" />}>
                    Delete
                  </Button>
                </div>
              </div>

              {/* Full Width */}
              <div className="pt-4 border-t border-zynxis-800">
                <p className="text-sm text-zynxis-500 mb-3">Full Width</p>
                <Button fullWidth>Full Width Button</Button>
              </div>
            </div>
          </Card>
        </Container>
      </section>

      {/* Card Showcase */}
      <section className="component-section border-b border-zynxis-800">
        <Container>
          <div className="mb-12">
            <Badge variant="default" className="mb-3">Cards</Badge>
            <h2 className="text-3xl font-bold text-white mb-3">Card Layouts</h2>
            <p className="text-zynxis-400">Flexible cards with headers, content, and footer sections.</p>
          </div>

          <div className="component-grid">
            {/* Basic Card */}
            <Card
              title="Basic Card"
              description="A simple card with title and description"
            >
              <p className="text-zynxis-400 text-sm">
                Cards are used to group related content and actions. They provide
                a clear visual boundary and hierarchy.
              </p>
            </Card>

            {/* Card with Footer */}
            <Card
              title="Card with Footer"
              description="Includes action buttons in the footer"
              footer={
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zynxis-500">Last updated 2h ago</span>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">Cancel</Button>
                    <Button size="sm">Save</Button>
                  </div>
                </div>
              }
            >
              <p className="text-zynxis-400 text-sm">
                Footer sections are great for actions, metadata, or secondary
                information related to the card content.
              </p>
            </Card>

            {/* Hoverable Card */}
            <Card
              title="Hoverable Card"
              description="Interactive card with hover effects"
              isHoverable
              headerAction={<Badge variant="success">Active</Badge>}
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-zynxis-accent/20 flex items-center justify-center">
                  <User className="h-5 w-5 text-zynxis-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-zynxis-200">John Doe</p>
                  <p className="text-xs text-zynxis-500">Product Designer</p>
                </div>
              </div>
            </Card>

            {/* Stats Card */}
            <Card className="bg-gradient-to-br from-zynxis-900 to-zynxis-950">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-zynxis-400">Total Revenue</span>
                <Badge variant="success">+12.5%</Badge>
              </div>
              <p className="text-3xl font-bold text-white">$48,290</p>
              <p className="text-xs text-zynxis-500 mt-1">Compared to last month</p>
            </Card>

            {/* Feature Card */}
            <Card>
              <div className="h-10 w-10 rounded-zynxis-sm bg-zynxis-accent/10 flex items-center justify-center mb-4">
                <Settings className="h-5 w-5 text-zynxis-accent" />
              </div>
              <h3 className="text-base font-semibold text-zynxis-100 mb-2">
                Fully Configurable
              </h3>
              <p className="text-sm text-zynxis-400">
                Every component is built with customization in mind. Override
                styles, behaviors, and layouts easily.
              </p>
            </Card>

            {/* Dark Card */}
            <Card className="border-zynxis-accent/20 shadow-glow">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-8 w-8 rounded-full bg-zynxis-success/20 flex items-center justify-center">
                  <Check className="h-4 w-4 text-zynxis-success" />
                </div>
                <Badge variant="success">Verified</Badge>
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                Enterprise Ready
              </h3>
              <p className="text-sm text-zynxis-400">
                Built with TypeScript, tested for accessibility, and designed
                for production-scale applications.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Badge Showcase */}
      <section className="component-section border-b border-zynxis-800">
        <Container>
          <div className="mb-12">
            <Badge variant="default" className="mb-3">Badges</Badge>
            <h2 className="text-3xl font-bold text-white mb-3">Status Badges</h2>
            <p className="text-zynxis-400">Visual indicators for status, categories, and labels.</p>
          </div>

          <Card title="Badge Variants">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <Badge>Default</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="danger">Danger</Badge>
                <Badge variant="info">Info</Badge>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Badge size="md">Default MD</Badge>
                <Badge variant="success" size="md">Success MD</Badge>
                <Badge variant="warning" size="md">Warning MD</Badge>
                <Badge variant="danger" size="md">Danger MD</Badge>
                <Badge variant="info" size="md">Info MD</Badge>
              </div>

              <div className="pt-4 border-t border-zynxis-800">
                <p className="text-sm text-zynxis-500 mb-3">In Context</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-zynxis-success animate-pulse" />
                    <span className="text-sm text-zynxis-300">Server Online</span>
                    <Badge variant="success" size="sm">Live</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-zynxis-300">Deployment</span>
                    <Badge variant="info" size="sm">v2.4.0</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-zynxis-300">Priority</span>
                    <Badge variant="danger" size="sm">High</Badge>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Container>
      </section>

      {/* Input Showcase */}
      <section className="component-section border-b border-zynxis-800">
        <Container>
          <div className="mb-12">
            <Badge variant="default" className="mb-3">Inputs</Badge>
            <h2 className="text-3xl font-bold text-white mb-3">Form Inputs</h2>
            <p className="text-zynxis-400">Accessible input fields with validation states.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card title="Basic Inputs">
              <div className="space-y-4">
                <Input label="Full Name" placeholder="Enter your name" />
                <Input label="Email" type="email" placeholder="you@example.com" required />
                <Input label="Password" type="password" placeholder="••••••••" />
                <Input label="Disabled" placeholder="Cannot edit" disabled />
              </div>
            </Card>

            <Card title="Validation States">
              <div className="space-y-4">
                <Input
                  label="Username"
                  placeholder="johndoe"
                  error="Username must be at least 3 characters"
                />
                <Input
                  label="Email"
                  type="email"
                  placeholder="invalid-email"
                  error="Please enter a valid email address"
                />
                <div className="pt-4">
                  <Button fullWidth>Submit Form</Button>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Modal Showcase */}
      <section className="component-section border-b border-zynxis-800">
        <Container>
          <div className="mb-12">
            <Badge variant="default" className="mb-3">Modals</Badge>
            <h2 className="text-3xl font-bold text-white mb-3">Modal Dialogs</h2>
            <p className="text-zynxis-400">Accessible overlays for confirmations, forms, and alerts.</p>
          </div>

          <Card title="Modal Triggers">
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => setIsModalOpen(true)}>
                Open Form Modal
              </Button>
              <Button variant="danger" onClick={() => setIsDeleteModalOpen(true)}>
                Open Danger Modal
              </Button>
              <Button variant="outline" onClick={() => setIsModalOpen(true)}>
                Large Modal
              </Button>
            </div>
          </Card>
        </Container>
      </section>

      {/* MODALS */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Create New Project"
        description="Fill in the details below to create a new project."
        footer={
          <>
            <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button leftIcon={<Check className="w-4 h-4" />}>
              Create Project
            </Button>
          </>
        }
      >
        <div className="space-y-4">
          <Input label="Project Name" placeholder="My Awesome Project" required />
          <Input label="Description" placeholder="Brief description..." />
          <div className="flex items-center gap-2 p-3 rounded-zynxis-sm bg-zynxis-800/50 border border-zynxis-800">
            <Mail className="w-4 h-4 text-zynxis-500" />
            <span className="text-sm text-zynxis-400">
              We'll send a confirmation to your email
            </span>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title="Delete Project"
        description="Are you sure you want to delete this project? This action cannot be undone."
        size="sm"
        footer={
          <>
            <Button variant="ghost" onClick={() => setIsDeleteModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="danger" leftIcon={<Trash2 className="w-4 h-4" />}>
              Delete Project
            </Button>
          </>
        }
      >
        <div className="p-4 rounded-zynxis-sm bg-zynxis-danger/5 border border-zynxis-danger/20">
          <p className="text-sm text-zynxis-danger">
            Warning: All data associated with this project will be permanently removed.
          </p>
        </div>
      </Modal>

      {/* Footer */}
      <footer className="border-t border-zynxis-800 py-12">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-zynxis-sm bg-zynxis-accent">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-zynxis-100">Zynxis</span>
            </div>
            <p className="text-sm text-zynxis-500">
              Built for Zynxis Frontend Internship — Week 2
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-zynxis-500 hover:text-zynxis-300 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-zynxis-500 hover:text-zynxis-300 transition-colors">
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
