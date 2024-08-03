---
layout: page
title: Range of Motion Assessment using a Digital Voice Assistant
description: This work proposes using a Digital Voice Assistant for Range of Motion measurement by utilizing 2D pose estimation techniques to estimate 3D limb pose for specific exercises.
img: /assets/img/projects/rom-dva/thumbnail-rom-dva.png
importance: 2
category: work
toc:
  sidebar: left
pretty_table: true
related_publications: true
---

Publication: {% cite wazir2022dva %}

## Introduction

Range of motion (ROM) is an important indicator of an individual’s physical health, and its degradation impacts their ability to perform activities of daily living. The elderly are particularly susceptible to mobility loss due to muscular decline, neuromuscular disorders, sedentary lifestyle, etc. Thus, they must undergo periodic ROM assessments to track their physical well-being and consult doctors for any decline in ROM. An at-home ROM assessment device can assist the elderly to self-perform ROM assessment and facilitate remote monitoring of and compliance to therapy. The pervasive adoption of digital voice assistants (DVAs), that include a monocular camera, offers an opportunity for at-home ROM assessment.

In this project, we use the [Google Nest Hub Max](https://store.google.com/product/google_nest_hub_max?hl=en-US&pli=1), a DVA with a monocular camera, to measure the range of motion of the shoulder and elbow joints. The system employs the MediaPipe library to perform 2D pose estimation and uses the joint coordinates to find the 3D pose of the limb using a 2D projection method. The system is validated by comparing the results with a 3D human model performing various shoulder and elbow exercises in a virtual environment. Next, for further validation, a neurologically intact individual performs the same exercises and the results of the proposed system are compared with the results from a markerless optical motion capture system ([Kinect](https://en.wikipedia.org/wiki/Kinect)). The [Bland-Altman limits of agreement (LOA)](https://en.wikipedia.org/wiki/Bland%E2%80%93Altman_plot) are computed and provided for the two sets of comparisons. The results demonstrate the feasibility of the proposed system in providing reliable ROM measurements using a DVA and suggest possible enhancements. Figure 1 shows the system architecture.

<p align="center">
    <img src="/assets/img/projects/rom-dva/system-architecture.png" alt="Overview of the proposed system." width="600px">
    <br>
    <em>Figure 1: Overview of the proposed system.</em>
</p>

## Joint coordinates estimation

To estimate the joint coordinates, we use the [MediaPipe library](https://ai.google.dev/edge/mediapipe/solutions/guide), which provides a 2D pose estimation model. The model detects 33 keypoints, including the shoulder, elbow, and wrist joints. The 2D coordinates of these keypoints are used to estimate the 3D pose of the limb using a 2D projection method. The 3D pose estimation is performed for the shoulder and elbow joints, and the range of motion is calculated based on the estimated joint angles.


<p align="center">
    <img src="/assets/img/projects/rom-dva/joint-positions.png" alt="Figure. 2: Joint positions obtained from the MediaPipe and the vectors used to compute the joint angles: \(ˆ·\) and \(~·\) denote points and vectors, respectively." width="600px">
    <br>
    <em>Figure. 2: Joint positions obtained from the MediaPipe and the vectors used to compute the joint angles: \(\,\hat{\cdot}\) and \(\,\vec{\cdot}\) denote points and vectors, respectively.</em>
</p>

\begin{equation}
    a_r = \frac{A_{R_{avg}}}{T_{N_{avg}}} \quad \text{and} \quad f_r = \frac{F_{R_{avg}}}{T_{N_{avg}}}
\end{equation}


alculation step: We now determine the shoulder and elbow angles corresponding to various ROM exercises. We begin by noting that for two arbitrary vectors $$\tilde{v}_i = \hat{y}_i − \hat{x}_i, i = 1, 2$$, the point of projection $$\hat{p}$$ of the vector $$\tilde{v}_2$$ on the vector $$\tilde{v}_1$$ is given by

\begin{equation}
    \label{eqn:eq_proj}
    \hat{p} = \text{proj}_{\vec{v_1}} \vec{v_2} + \hat{x_1} = \left( \frac{\vec{v_1} \cdot \vec{v_2}}{||\vec{v_1}||^2} \right) \vec{v_1} + \hat{x_1}
\end{equation}

Using (\ref{eqn:eq_proj}), we can now determine the following quantities: *(i)* the vertical and horizontal projections of the elbow $$\hat{E}_R$$ on the base vector  $$\vec{S}_B$$ and the trunk vector $$\vec{T}_N$$, denoted as $$\hat{E}_x$$ and $$\hat{E}_y$$, respectively; *(ii)* the vertical and horizontal projections of the wrist $$\hat{W}_R$$ on $$\vec{S}_B$$ and $$\vec{T}_N$$, denoted as $$\hat{W}_x$$ and $$\hat{W}_y$$, respectively; and *(iii)* the vertical projection of the shoulder $$\hat{S}_R$$ on $$\vec{S}_B$$, denoted as $$\hat{S}_{x}$$. See Figure 2 that shows the projections $$\hat{E}_x$$, $$\hat{E}_y$$, $$\hat{W}_x$$, $$\hat{W}_y$$, and $$\hat{S}_{x}$$ for the right arm.

It can be shown that for a 2D projection of a vector rotating inside a sphere with radius equal to the length of the rotating vector, the change in the distance from the vertical projection point of a vector ($$\hat{E}_y$$ or $$\hat{W}_y$$)  to $$\hat{S}_M$$ is directly proportional to $$\cos({\theta})$$. Thus, $$\theta$$ can be calculated for the shoulder abduction-adduction and flexion-extension exercises as shown in (\ref{eqn:ROM_angles_theta_phi}). With the user at a constant distance from the DVA camera and when $$\theta = 90^\circ$$, $$\phi$$ can similarly be calculated as shown in (\ref{eqn:ROM_angles_theta_phi}). For the shoulder internal-external rotation exercise, let the upper arm point downwards (i.e., $$\theta = 0^\circ$$), and flex the elbow to $$90^\circ$$ (i.e., elbow angle $$\alpha = 90^\circ$$). Then the internal-external rotation (i.e., shoulder angle $$\psi$$) can be computed as shown in (\ref{eqn:ROM_angles_psi_alpha}). Finally, for the elbow flexion-extension exercise, the arm is kept parallel to the camera image plane (i.e., $$\phi=0^\circ$$) and the elbow angle $$\alpha$$, between the upper arm $$\vec{U}_R$$ and forearm $$\vec{F}_R$$ is calculated as shown in (\ref{eqn:ROM_angles_psi_alpha}).


\begin{equation}
    \label{eqn:ROM_angles_theta_phi}
    \theta = \cos^{-1} \left( \frac{\hat{W_y} - \hat{S_M}}{T_{N_{avg}} a_r} \right), \quad \phi = \cos^{-1} \left( \frac{\hat{W_x} - \hat{S_x}}{T_{N_{avg}} a_s} \right),
\end{equation}

\begin{equation}
    \label{eqn:ROM_angles_psi_alpha}
    \psi = \cos^{-1} \left( \frac{\hat{W_x} - \hat{E_x}}{T_{N_{avg}} f_r} \right), \quad \alpha = \cos^{-1} \left( \frac{\vec{U_R} \cdot \vec{F_R}}{||\vec{U_R}|| ||\vec{F_R}||} \right)
\end{equation}



## Results

The results from the proposed method are compared to the ground truth using the Bland-Altman test to find the limits of agreement (LOA). Figure 3 and Table I show the LOA for various exercises. The LOA for exercise 2 is seen to be higher than for other exercises. This is explained by the arm motion out of the frontal plane for exercise 2, where the lack of depth information causes the proposed approach to be degraded especially near the extreme angles $$(\theta = 0^\circ \text{ and } \theta = 180^\circ)$$. In exercise 3, a similar effect is seen at $$(\phi = 0^\circ)$$, but since the angle never reaches $$(\phi = 180^\circ)$$, the LOA is lower in this case. In exercise 4, since only the forearm moves out of the frontal plane, the lack of depth estimation does not degrade the corresponding ROM estimate excessively. 

Figure. 3 and Table I also show the LOA between the proposed method vs. Kinect. The LOA data has larger values for comparison with Kinect in contrast to the ground truth. One reason for this may be that the camera sensor suffers from noise. Next, for exercise 1, the large LOA against Kinect may arise from the discrepancy in the data for the low values of shoulder elevation angles, which are normally the resting position of the arm and may not be significant for one’s ability to perform activities of daily living. For the larger shoulder elevation angles, the data from the proposed system closely follows the data from the Kinect. For exercise 2, the large value of LOA can be attributed to the discrepancy in the data for the low and high values of shoulder elevation angles, where the Kinect measurements may suffer due to only small changes in depth. For exercise 3, the large value of LOA can be attributed to data discrepancy for $$(\phi = 90^\circ)$$ where the Kinect sensor suffers from occlusion of the elbow joint. For exercise 4, the large LOA value may arise from the moving average process used in the proposed method that reduces the slope of the motion trajectory as the arm switches from internal to external rotation. While this does not affect the peak values, a reduction in the moving average window size is found to improve the LOA. Finally, for exercise 5, the large LOA against Kinect may be caused by the pose prediction uncertainty from the MediaPipe and the Kinect.

**TABLE I:** Limits of agreement for shoulder (S) and elbow (E) exercises.

| No. | Exercise                              | vs. Synthetic data | vs. Kinect    |
|-----|---------------------------------------|--------------------|---------------|
| 1   | Shoulder abduction-adduction          | ±4.3°              | ±8.8°         |
| 2   | Shoulder flexion-extension            | ±7.1°              | ±12.6°        |
| 3   | Shoulder plane angle                  | ±3.3°              | ±12.1°        |
| 4   | Shoulder internal-external rotation   | ±4.3°              | ±15.6°        |
| 5   | Elbow flexion-extension               | ±2.9°              | ±7.2°         |


<p></p>

*(Python programming, MediaPipe, Data acquisition, processing, and visualization)*

**Tech**: Python, MATLAB, Web sockets, IFTTT

---