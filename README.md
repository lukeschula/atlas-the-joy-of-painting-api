# atlas-the-joy-of-painting-api

# Project Context

In this project, we are going to explore the idea of **ETL** (Extract, Transform, Load), which is the process of taking data from multiple unique sources, modifying them in some way, and then storing them in a centralized database.

This is a very common practice when collecting data from systems in order to utilize that data in another system. The data may come in various formats, such as:

- **CSV**
- **JSON**
- **XML**
- **API requests** with custom formats

Additionally, you might even have direct access to several databases with different, but related data, that you want to merge into a new database in order to gain insights from it.

---

# Presented Problem

Your local public broadcasting station has an overwhelming number of requests for information on **The Joy of Painting**. Their viewers want a website that allows them to filter the 403 episodes based on the following criteria:

### 1. Month of Original Broadcast
This will be useful for viewers who wish to watch paintings that were done during the same month of the year.

### 2. Subject Matter
This will be useful for viewers who wish to watch specific items being painted.

### 3. Color Palette
This will be useful for viewers who wish to watch specific colors being used in a painting.

---

Your local broadcasting station has already done some legwork to gather data, but it is currently spread out across multiple files and formats, making it unusable in its present form. They’ve also hired another team to build a front-end for viewers to filter episodes of *The Joy of Painting*.

Now, they’ve hired you to help with the following:

1. **Designing and building a database** to house the collected data in a way that is usable.
2. **Building an API** to access this data.