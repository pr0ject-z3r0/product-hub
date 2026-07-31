# Content Taxonomy

## Purpose

The Content Taxonomy defines how knowledge is classified throughout the Product Hub. It provides a consistent structure for organising, discovering, and relating content across the platform.

A well-defined taxonomy ensures that users can find information intuitively while enabling efficient content management, search, recommendations, analytics, and future AI-powered capabilities.

---

# Taxonomy Principles

The taxonomy shall:

* Organise knowledge by subject, not by author or publication date.
* Ensure every content item has one primary domain.
* Allow multiple categories and tags where appropriate.
* Maintain consistent terminology across the platform.
* Support both human navigation and machine interpretation.
* Be scalable without requiring structural redesign.

---

# Knowledge Domains

A **Domain** represents the highest level of organisation.

Each content item belongs to exactly **one** primary domain.

## Initial Domains

* Product Management Fundamentals
* Product Strategy
* Product Discovery
* Product Delivery
* Product Ownership
* Agile & Scrum
* Product Analytics
* Product Leadership
* Product Operations
* User Experience
* Stakeholder Management
* Career Development
* Frameworks
* Templates
* Playbooks
* Case Studies
* Glossary

---

# Categories

Each domain contains one or more categories.

Example:

Product Strategy

* Product Vision
* Product Goals
* Product Roadmaps
* Prioritisation
* Product Portfolio
* Product Metrics

Product Discovery

* Customer Research
* User Interviews
* Opportunity Assessment
* Problem Validation
* Experimentation

Categories provide a second level of organisation.

---

# Topics

Topics represent the individual concepts users learn.

Example:

Domain

Product Discovery

↓

Category

Customer Research

↓

Topics

* User Interviews
* Surveys
* Observation
* Contextual Inquiry
* Customer Journey Mapping

---

# Content Types

Each item must have one content type.

Supported content types:

* Article
* Framework
* Template
* Playbook
* Checklist
* Case Study
* Glossary Entry
* Learning Path
* Interview Question
* Reference Guide

---

# Difficulty Levels

Every content item shall be classified by difficulty.

* Beginner
* Intermediate
* Advanced
* Expert

Difficulty indicates the expected level of prior knowledge.

---

# Tags

Tags provide cross-cutting classification.

Examples:

Agile

Scrum

Lean

Discovery

Strategy

Leadership

Metrics

Experimentation

Stakeholders

Analytics

A content item may contain multiple tags.

---

# Content Relationships

Content may have relationships with other content.

Supported relationship types include:

* Parent Topic
* Child Topic
* Prerequisite
* Related Topic
* Related Framework
* Related Template
* Related Playbook
* Related Case Study
* Related Learning Path
* Glossary References

These relationships create the Product Hub knowledge graph.

---

# Metadata Requirements

Every content item shall contain:

Required metadata

* Title
* Slug
* Domain
* Category
* Content Type
* Difficulty
* Tags
* Summary
* Version
* Author
* Created Date
* Last Updated

Optional metadata

* Prerequisites
* Related Content
* Estimated Reading Time
* Review Date
* External References

---

# URL Structure

URLs should reflect the taxonomy.

Examples:

```text
/product-strategy/product-vision/

/product-discovery/user-interviews/

/frameworks/rice/

/templates/product-requirements-document/

/playbooks/product-discovery/
```

URLs should:

* Be lowercase.
* Use hyphens instead of spaces.
* Avoid unnecessary nesting.
* Remain stable after publication.

---

# Naming Conventions

Titles

* Sentence case.
* Clear and descriptive.
* Avoid unnecessary abbreviations.

File names

* Lowercase.
* Kebab-case.
* Descriptive.

Examples

```text
product-vision.md

jobs-to-be-done.md

user-interview-template.md
```

---

# Taxonomy Governance

The taxonomy is a controlled vocabulary.

New domains, categories, and tags shall be reviewed before adoption to ensure:

* Consistency
* Reusability
* Minimal duplication
* Long-term maintainability

---

# Success Criteria

The taxonomy will be considered successful when:

* Users can easily locate relevant content.
* Contributors can classify content consistently.
* Navigation remains intuitive as the platform grows.
* Search produces relevant results.
* AI and recommendation systems can leverage structured metadata effectively.
