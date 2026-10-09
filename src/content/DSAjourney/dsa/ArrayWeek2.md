---
layout: ../../../layouts/DSAjourneyLayout.astro
title: "ARRAYS"
description: "Week - 2 "
pubDate: "2026-10-9"
category: "dsa"
level: "intro"
# updatedDate: "2025-10-27"         
---
# ARRAYS — TWO POINTERS


---

# Two Pointers — Solving Problems Smarter

> *Sometimes, the key to optimizing a solution is not doing more work, but avoiding unnecessary work.*

Continuing my DSA journey, I've started exploring one of the most useful problem-solving techniques used with arrays: **Two Pointers**.

When solving array problems, a straightforward approach often involves nested loops. While this works, it can lead to \(O(n^2)\) time complexity.

The two-pointer technique offers a smarter approach to certain problems by using two indices that move through an array according to specific conditions.

## What Is the Two-Pointer Technique?

The idea is simple: instead of repeatedly checking every possible pair of elements, we maintain two pointers and move them strategically to find the answer.

Depending on the problem, these pointers can start at opposite ends of an array or move in the same direction.

For example, consider a sorted array:

`[1, 2, 4, 6, 8, 11]`

Suppose we need to find whether two elements add up to `10`.

We can start with two pointers:

- `left` at the first element
- `right` at the last element

Then compare their sum with the target.

- If the sum is too small, move the left pointer forward.
- If the sum is too large, move the right pointer backward.
- If the sum equals the target, we've found the pair.

In this example, the pair is `2 + 8 = 10`.

Since the array is sorted, we can eliminate unnecessary comparisons rather than checking every possible pair.

## Why Is It Useful?

The biggest advantage of this technique is its ability to reduce time complexity.

- **Brute force:** Check every pair, taking \(O(n^2)\) time.
- **Two pointers:** Traverse the sorted array using two pointers, taking \(O(n)\) time.

The two-pointer approach requires \(O(1)\) extra space for the pointers themselves.

This improvement depends on the problem's properties. For the pair-sum example, the array must be sorted for this particular strategy to work correctly.

## Common Applications

The two-pointer technique appears in several array and string problems, including:

- Finding a pair with a target sum in a sorted array
- Removing duplicates from a sorted array
- Reversing an array or string
- Checking whether a string is a palindrome
- Solving problems involving containers and water

The key isn't just knowing the technique. It's understanding when to use it and why moving a particular pointer is the correct decision.

## My Daily DSA Practice

Alongside learning concepts and exploring different problem-solving patterns, I've been trying to maintain a daily problem-solving habit.

I'm solving the **LeetCode Problem of the Day (POTD)** daily and sharing my progress and solutions on LinkedIn.

This routine helps me stay connected with DSA, encounter different types of problems, and gradually improve my approach to solving them.

You can follow my journey here:

- **LeetCode:** [md_owais](https://leetcode.com/u/md_owais/) — solving problems and practising daily.
- **LinkedIn:** [Mohd Owais](https://www.linkedin.com/in/mohd-owais-45a1a0324) — sharing my daily POTD progress and DSA learnings.

For me, the goal is not simply to maintain a streak. It's to understand the logic, learn from mistakes, and become more comfortable approaching unfamiliar problems.

## What's Next?

I'll continue strengthening my understanding of arrays and practising problems that use the two-pointer technique.

After that, I'll gradually explore other important patterns, including **sliding window, prefix sums, and hashing**.

One concept at a time. One problem at a time.

**The journey continues.**

## A Small Update

You might have noticed that I haven't posted on my website for a while. The reason was my **CAT 2 examinations**, which required me to shift more of my attention towards academics.

During that period, my DSA learning slowed down, but it never stopped completely. Even though I wasn't publishing blog posts, I continued solving problems on LeetCode and sharing my daily **Problem of the Day (POTD)** progress on LinkedIn.

My term-end examinations are now approaching in the next 4–5 days, so I'll once again be balancing academics with my DSA practice.

I may not always be able to document every step of the journey, but that doesn't mean I'm not making progress.

---

**The posts might pause, the pace might slow down, but the learning continues.**

- **LeetCode:** [md_owais](https://leetcode.com/u/md_owais/)
- **LinkedIn:** [Mohd Owais — Daily DSA POTD](https://www.linkedin.com/in/mohd-owais-45a1a0324)