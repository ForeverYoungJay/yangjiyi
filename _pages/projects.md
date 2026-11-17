---
layout: page
title: projects
permalink: /projects/
description:
nav: true
nav_order: 3
---

<div class="en" markdown="1">

### CrystalPlasticitySim — LLM multi-agent system for crystal plasticity simulation

_2024–2026 · published in STAM: Methods (first author)_

- Designed a three-agent framework (Supervisor, Simulation, Computational Assistant) covering DAMASK input configuration, simulation runs, result extraction and optimization loops.
- Fitted experimental data and validated simulations on Ni₃Al single-crystal cold-rolling, yielding a reproducible automated workflow with open-source code.

### CPExtractor — extracting crystal plasticity parameters from literature

_LLM-based framework · manuscript in preparation_

- An LLM-driven pipeline that collects, structures and traces the provenance of crystal plasticity constitutive parameters from scientific papers.

### DAMASK-MCP — a standardized tool interface for scientific computing

_2025–2026 · ongoing_

- Wraps crystal plasticity solver operations as a Model Context Protocol server: input validation, pre-processing, execution, post-processing and result management.
- Connects with literature parameter extraction and data provenance to make LLM-assisted simulation more controllable and traceable.

### Ni₃Al single-crystal cold-rolling — slip interactions and deformation anisotropy

_2021–2023 · SSRN preprint_

- Calibrated crystal plasticity parameters from single-crystal tensile tests, optimized shear boundary conditions for cold rolling, and compared orientations and slip activity.
- For three near-⟨211⟩ samples, identified the coupled feasible range of glissile-junction and collinear interactions, showing a single parameter is not uniquely identifiable.

### SCR-GNO — single-crystal-response-conditioned graph networks for polycrystal stress

_2026 · collaboration with MPI-SusMat, Germany_

- A graph neural network combining sparse single-crystal response fingerprints, grain topology, crystal orientation and loading history to predict grain-level and macroscopic stress.
- Evaluation protocols for material extrapolation, loading extrapolation, joint extrapolation and few-shot adaptation.

### Further explorations — data-driven modeling of polycrystal functional response

_2025–2026 · exploratory_

- Magnetostriction physics priors with field-conditioned graph attention networks; grain-network reconstruction from 3D EBSD/EDS data for corrosion correlation analysis.

</div>

<div class="zh" markdown="1">

### CrystalPlasticitySim｜面向晶体塑性模拟的 LLM 多智能体系统

_2024—2026 · 论文发表于 STAM: Methods（第一作者）_

- 设计 Supervisor、Simulation、Computational Assistant 三智能体协作框架，打通 DAMASK 输入配置、模拟执行、结果提取与优化迭代。
- 基于 Ni₃Al 单晶冷轧开展实验数据拟合与模拟验证，形成可复现的自动化工作流及开源代码。

### CPExtractor｜从科学文献中提取晶体塑性本构参数

_LLM-Based Framework · 论文撰写中_

- 设计由大语言模型驱动的晶体塑性参数抽取流程，面向论文文本收集、结构化整理和参数来源追踪。

### DAMASK-MCP｜面向科学计算的标准化工具接口

_2025—2026 · 在研_

- 基于 Model Context Protocol 封装晶体塑性求解器操作，覆盖输入数据校验、预处理、运行、后处理与结果管理。
- 与文献本构参数提取和数据溯源流程衔接，提升 LLM 辅助材料模拟的可控性与可追溯性。

### Ni₃Al 单晶冷轧｜滑移系相互作用与变形各向异性

_2021—2023 · SSRN 公开预印本_

- 利用单晶拉伸试验数据标定晶体塑性本构参数，优化冷轧剪切边界条件并比较晶体取向及滑移活动。
- 针对三组近 ⟨211⟩ 取向样品识别 glissile-junction 与 collinear 相互作用的耦合可行范围，指出单一参数不可唯一辨识。

### SCR-GNO｜单晶响应驱动的多晶应力图网络

_2026 · 德国 MPI-SusMat 合作研究_

- 融合稀疏单晶响应指纹、晶粒拓扑、晶体取向及加载历史，构建预测晶粒应力和宏观应力的图神经网络。
- 设计材料外推、加载外推、联合外推及少样本适应的评估方案，研究模型迁移能力及局部预测瓶颈。

### 相关拓展｜多晶功能响应与材料表征数据驱动建模

_2025—2026 · 研究探索_

- 探索磁致伸缩物理先验与场条件图注意力网络；基于三维 EBSD/EDS 数据重建晶粒网络并进行腐蚀相关性分析。

</div>
